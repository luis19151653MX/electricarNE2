import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Paypal from "./Paypal";
import { useNavigate } from 'react-router-dom';


export default function Carrito() {
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("usuarioId") === null) {
            navigate('/electricarNE2/public/Login');
        }
    }, [navigate]);

    return (
        <>
            {
                sessionStorage.getItem("usuarioId") !== null && (
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <Paypal></Paypal>
                        </Col>
                    </Row>
                )
            }
        </>

    );
}