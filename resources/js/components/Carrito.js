import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Paypal from "./Paypal";
import { useNavigate } from 'react-router-dom';


export default function Carrito() {
    const navigate = useNavigate();

    const [carrito,setCarritos]=useState([]);

    
    useEffect(() => {
        if (GlobalUsuarioId === null) {
            navigate('/electricarNE2/public/Login');
        }
    }, [navigate]);

    return (
        <>
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
        </>

    );
}