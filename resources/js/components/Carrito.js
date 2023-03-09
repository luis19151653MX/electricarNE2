import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Paypal from "./Paypal";
import { useNavigate } from 'react-router-dom';
import "../../css/carrito.css";
import CarritoFila from "./CarritoFila";
import ListaCarrito from './ListaCarritoActual';


export default function Carrito() {
    const navigate = useNavigate();

    useEffect(() => {
        if (GlobalUsuarioId === null) {
            navigate('/electricarNE2/public/Login');
        }
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
                console.log(response.data);
                console.log(carritos);
            }).catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        loadCarritos()
    }, [])

    

    return (
        GlobalUsuarioId !== null && (
            <Container fluid>
                <br></br>
                <br></br>

                <Row >
                    <Col md={3} lg={{ minWidth: '250px', maxWidth: '300px', width: "270px" }}>
                        <h1 className='titulo'> Tus carritos ... </h1>
                        {

                            carritos.map((carrito) =>
                            (
                                <div key={carrito.id}>
                                    <CarritoFila carrito={carrito}></CarritoFila>
                                </div>
                            )
                            )
                        }
                    </Col>
                    <ListaCarrito></ListaCarrito>
                    <Col>
                        <Paypal></Paypal>
                    </Col>
                </Row>
            </Container>
        )
    );
}
