import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Paypal from "./Paypal";
import { useNavigate } from 'react-router-dom';


export default function Carrito() {
    const navigate = useNavigate();
    
    useEffect(() => {
        if (GlobalUsuarioId === null) {
            navigate('/electricarNE2/public/Login');
        }
    }, [navigate]);
    
    const [carrito,setCarritos]=useState([]);

    const loadCarritos = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("id", windows.GlobalUsuarioId);
        await axios.post("http://127.0.0.1/electricarNE2/public/api/index_carritos", data, config)
            .then(response => {
                console.log(response.data);
                setCarritos(response.data);
            }).catch(error => {
                console.log(error);
            });
    }


    

    return (
        <Container fluid>
            <br></br>
            <br></br>
            {
                GlobalUsuarioId !== null && (
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <Paypal></Paypal>
                        </Col>
                    </Row>
                )
            }
        </Container>

    );
}