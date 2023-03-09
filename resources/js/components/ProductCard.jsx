import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col, Toast, ToastContainer, Table, Modal, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import colores from "../../css/colores.css";

export default function ProductCard() {
    const location = useLocation();
    //si no hay nada en el estado de location toma el valor 2
    const [productoId, setProdutoId] = useState(location?.state?.autoID ?? 2);
    const [producto, setProducto] = useState({});

    const loadProduct = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("id", productoId);
        await axios.post("http://127.0.0.1/electricarNE2/public/api/get_producto", data, config)
            .then(response => {
                console.log(response.data.modelo);
                setProducto(response.data);
            }).catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        loadProduct()
    }, [])


    const [showToastC, setShowToastC] = useState(false);
    const toastCloseC = () => setShowToastC(false);
    const toastShowC = () => {
        storeListProduct();
        setShowToastC(true);
    }
    const [position, setPosition] = useState('bottom-center');


    const storeListProduct=async ()=>{
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("usuario_id", window.GlobalUsuarioId);
        data.append("carrito_id", window.GlobalCarritoActual);
        data.append("cantidad", 1);
        data.append("producto_id", productoId);
        await axios.post("http://127.0.0.1/electricarNE2/public/api/store_lista_carritos", data, config)
            .then(response => {
                console.log("añadido correctamente");
            }).catch(error => {
                console.log(error);
            });
    }

    return (

        <Container>
            <br></br>
            {
                (location.state === null) ? <h1>No encontrado</h1>
                    : <>
                        <h1 className='colorVerde' style={{ fontSize: 24 + "pt", textAlign: "left" }}><b>{producto.modelo}</b></h1>
                        <br />  
                        <Row style={{ textAlign: "left" }}>
                            <Col >
                                <br /> <br />  <br /> <br />
                                <img alt={producto.modelo} title={producto.modelo} src={producto.imagen} width={550}></img>
                            </Col>
                            <Col md="5" >
                                <h4 className='colorVerde'>Características</h4>
                                <br></br>
                                <h5> <span>Precio: </span> <span className='colorMorado'> ${producto.precio} MXN</span>  </h5>
                                <h5><span>Precio con IVA:</span> <span className='colorMorado'> ${producto.precio * 1.16} MXN</span></h5>
                                <h5 style={{ textAlign: "justify" }}>{producto.descripcion}</h5>

                                <Row>
                                    <Col>
                                        <h5> Categoría: {producto.categoria}</h5>
                                        <h5>   Año: {producto.año} </h5>
                                        <h5> Marca: {producto.marca}</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button variant='primary' onClick={toastShowC}>Añadir al carrito</Button>
                                </Row>
                            </Col>
                        </Row>
                        <ToastContainer className="p-3" position={position}>
                            <Toast show={showToastC} onClose={toastCloseC}>
                                <Toast.Header>
                                    <strong className="me-auto">Añadir al carrito</strong>
                                </Toast.Header>
                                <Toast.Body>Se añadió correctamente tu producto al carrito.</Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </>
            }
        </Container>
    );
}