import React  from 'react';
import { Row, Col } from 'react-bootstrap';

export default function CarritoProducto(props) {
    
    return (
            <Col md={2} style={{ backgroundColor: "#aaaaaa" }} >
                <h1>{props.lista.producto_id}</h1>
            </Col>
    );
}