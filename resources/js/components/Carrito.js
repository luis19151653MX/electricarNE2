import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../../css/carrito.css";
import CarritoFila from "./CarritoFila";
import ListaCarrito from './ListaCarritoActual';
import PayPal from "./Paypal";


export default function Carrito() {
    const navigate = useNavigate();

    useEffect(() => {
        if (GlobalUsuarioId === null) {
            navigate('/electricarNE2/public/Login');
        } else loadCarritos();
    }, [navigate]);

    const [carritos, setCarritos] = useState([]);
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
                if (window.GlobalCarritoActual === null) window.GlobalCarritoActual = response.data[0].id;
                console.log("Carrito.js globalcarrito" + window.GlobalCarritoActual);
            }).catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        loadCarritos()
    }, [])

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
                window.location.reload();
            }).catch(error => {
                console.log(error);
            });
    }

    const [total,setTotal]=useState(window.GlobalTotalPagar);

    return (
        GlobalUsuarioId !== null && (
            <Row className='carritoRow'>
                <br></br>
                <br></br>

                    <Col md={3} style={{textAlign:"center" ,justifyContent:"center"}} >
                        <h1 className='titulo'> Tus carritos: </h1>
                        <br></br>
                        <Button variant="success" onClick={storeCarrito}> Nuevo carrito </Button>
                        <br></br>
                        {

                            carritos.map((carrito) =>
                            (
                                
                                <div key={carrito.id}>
                                    <br></br>
                                    <CarritoFila carrito={carrito}></CarritoFila>
                                </div>
                            )
                            )
                        }
                    </Col>
                    <Col lg="auto" style={{textAlign:"center", justifyContent:"center", minWidth:"520px"}} >
                        {
                            window.GlobalCarritoActual !== null ?
                                (<ListaCarrito carritoAct={window.GlobalCarritoActual}></ListaCarrito>)
                                :
                                (
                                    <h1>selecciona un carrito</h1>
                                )
                        }
                    </Col>
            </Row>
        )
    );
}


