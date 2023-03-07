import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Paypal from "./Paypal";
import { useNavigate } from 'react-router-dom';


export default function Carrito() {
    const navigate = useNavigate();

    function navegar(){
        navigate('/electricarNE2/public/Login');
        console.log(localStorage.getItem("usuarioId"));
    }
    

    return (
        <>
            {
                (localStorage.getItem("usuarioId") === null) ? (
                    navegar
                )
                    :
                    (
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