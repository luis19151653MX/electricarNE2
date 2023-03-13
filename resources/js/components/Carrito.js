import React, { useEffect, useState } from 'react';
import { Row, Col, Button, InputGroup, CloseButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import ItemListaCarrito from "./ItemListaCarrito";
import PayPal from "./Paypal";


import "../../css/carrito.css";
import "../../css/colores.css";

export default function Carrito() {
    const navigate = useNavigate();

    //importante: al actualizar un estado, basicamente le decimos a nuestro componete que se renderice una vez mas
    const [carritos, setCarritos] = useState([]);

    /*se ejecuta cuando se usa navigate, en este caso lo cuenta inclusive si se manda llamar dentro del mismo
        useEffect(() => {
        if (window.GlobalUsuarioId === null) {
            navigate('/electricarNE2/public/Login');
        } else loadCarritos();
    }, [navigate]);
    */

    //se manda llamar solo una vez cuando se monta el componente
    useEffect(() => {
        const compruebaLogin = () => {
            if (window.GlobalUsuarioId === null) {
                navigate('/electricarNE2/public/Login');
            } else {
                loadCarritos();
            }
        };
        compruebaLogin();
    }, [])

    const loadCarritos = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("usuario_id", window.GlobalUsuarioId);
        await axios.post("http://127.0.0.1/electricarNE2/public/api/index_carritos", data, config)
            .then(response => {
                setCarritos(response.data);
                //console.log(response.data);
                //console.log(response.data[0].id);
                if (window.GlobalCarritoActual === null) {
                    window.GlobalCarritoActual = response.data[0].id;
                    setSelectedCarrito(response.data[0].id);
                }
                console.log("Carrito.js globalcarrito" + window.GlobalCarritoActual);
                loadListaCarritos();
            }).catch(error => {
                console.log(error);
            });
    }

    const storeCarrito = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("usuario_id", window.GlobalUsuarioId);
        await axios.post("http://127.0.0.1/electricarNE2/public/api/store_carritos", data, config)
            .then(response => {
                console.log("carrito añadido correctamente");
                loadCarritos();
            }).catch(error => {
                console.log(error);
            });
    }




    //Carrito Fila
    const [selectedCarrito, setSelectedCarrito] = useState(null);

    function renderizarFilaCarrito(carrito) {

        const clickFila = () => {
            setSelectedCarrito(carrito.id);
            window.GlobalCarritoActual = carrito.id;
            console.log(window.GlobalCarritoActual);
            loadListaCarritos();
        };

        //esto de aqui se esta ejecutando siempre
        const isSelected = carrito.id === selectedCarrito;

        //click eliminar un carrito
        const cambioStatus = async () => {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            };
            const data = new FormData();
            data.append("id", carrito.id);
            await axios.post("http://127.0.0.1/electricarNE2/public/api/cambiostatus_carrito", data, config)
                .then(response => {
                    console.log("carrito eliminado correctamente");
                    loadCarritos();
                    window.GlobalCarritoActual = null;
                }).catch(error => {
                    console.log(error);
                });
        }

        return (
            <div
                className='carritoFila'
                onClick={clickFila}
                style={{
                    backgroundColor: isSelected ? '#006655' : '#d6ece9',
                    color: isSelected ? "white" : "#757575",
                    animation: isSelected ? 'pulse 2s infinite' : 'none',
                    transform: isSelected ? 'scale(1.1)' : 'scale(1)'
                }}
            >
                <Col style={{ width: "50px" }}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/641/641813.png"
                        title="carrito"
                        alt="carrito"
                        width="100%"
                        height="auto"
                        style={{ maxHeight: "50px", minHeight: "50px", minWidth: "50px", maxWidth: "50px" }}
                    />
                </Col>
                <Col md="auto" style={{ justifyContent: "center" }}>
                    <h3>
                        <span>{carrito.id}: </span>
                        <span>{carrito.fecha_ultima_modificacion}</span>
                    </h3>
                </Col>
                <Col style={{ width: "50px" }}>
                    <InputGroup style={{ maxWidth: "40px" }}>
                        <CloseButton onClick={cambioStatus}>
                        </CloseButton>
                    </InputGroup>
                </Col>
            </div>
        );
    }




    //Lista de carrito
    const [listaCarrito, setListaCarrito] = useState([]);

    //se manda a llamr en loadCarritos y en clickFilas
    const loadListaCarritos = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("carrito_id", window.GlobalCarritoActual);
        await axios.post("http://127.0.0.1/electricarNE2/public/api/index_lista_carritos", data, config)
            .then(response => {
                console.log(response.data);
                setListaCarrito(response.data);
                loadTotal();
            }).catch(error => {
                console.log(error);
            });
    }

    const [totalPagar, setTotalPagar] = useState();
    const loadTotal = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("id", window.GlobalCarritoActual);
        await axios.post("http://127.0.0.1/electricarNE2/public/api/totalPagar_carrito", data, config)
            .then(response => {
                console.log("total:" + response.data);
                setTotalPagar(response.data);
            }).catch(error => {
                console.log(error);
            });
    }



    function renderizarListaCarrito(lista) {
        const cambioStatus = async () => {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            };
            const data = new FormData();
            data.append("id", lista.id);
            await axios.post("http://127.0.0.1/electricarNE2/public/api/cambiostatus_lista_carritos", data, config)
                .then(response => {
                    console.log("producto borrado" + lista.producto_id);
                    loadListaCarritos();
                }).catch(error => {
                    console.log(error);
                });
        }
        function borrarProducto() {
            cambioStatus();
        }
        return (
            <ItemListaCarrito lista={lista} borrarProducto={borrarProducto}  ></ItemListaCarrito>
        );
    }














    return (
        window.GlobalUsuarioId != null && (
            <>
                <br></br>
                <Row className='carritoRow'>
                    <br></br>
                    <br></br>

                    <Col md={3} style={{ textAlign: "center", justifyContent: "center" }} >
                        <div style={{ minHeight: "100px" }}>
                            <h1 className='titulo'> Tus carritos: </h1>
                            <Button className='botonAdd' onClick={storeCarrito}> Nuevo carrito </Button>
                        </div>
                        <br></br>
                        <br></br>
                        <div>
                            {carritos.map((carrito) =>
                            (
                                <div key={`carrito-${carrito.id}`}>
                                    <br></br>
                                    {renderizarFilaCarrito(carrito)}
                                </div>
                            )
                            )
                            }
                        </div>

                    </Col>

                    <Col lg="auto" style={{ displaytextAlign: "center", alignItems: "center", justifyContent: "center", minWidth: "270px" }} >
                        <div style={{ display: 'flex' }}>
                            <Col md="auto" >
                                <div style={{ minHeight: "100px" }}>
                                    <h1 className='titulo'> Productos del carrito: {window.GlobalCarritoActual} </h1>
                                </div>
                                {listaCarrito.length === 0 ?
                                    (
                                        <>
                                            <br></br>
                                            <h2>El carrito está vacío</h2>
                                            <Button variant="primary">Visita nuestro cátalogo</Button>
                                        </>
                                    )
                                    :
                                    (
                                        window.GlobalCarritoActual !== null ?
                                            (
                                                listaCarrito.map((lista) =>
                                                (
                                                    <div key={`lista-carrito-${lista.id}`}>
                                                        <br></br>
                                                        {renderizarListaCarrito(lista)}
                                                    </div>
                                                )
                                                )
                                            )
                                            :
                                            (
                                                <h1>selecciona un carrito</h1>
                                            )
                                    )
                                }
                            </Col>
                            <Col style={{ width: "250px" }}>
                                {
                                    totalPagar != 0 && (
                                        <>
                                            <div style={{ minHeight: "100px" }}>
                                                <h1 className='titulo'> Total a Pagar: ${totalPagar} MXN </h1>
                                            </div>
                                            <br></br>
                                            <PayPal total={totalPagar}></PayPal>
                                        </>
                                    )
                                }

                            </Col>

                        </div>
                    </Col>
                </Row>
            </>
        )
    );
}


