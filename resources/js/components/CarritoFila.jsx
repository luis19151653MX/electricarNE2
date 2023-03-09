import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import "../../css/carrito.css";

export default function carritoFila(props) {

    const [backgroundColor, setBackgroundColor] = useState('#0d8f79');

    const handleClick = () => {
        window.GlobalCarritoActual = props.carrito.id;
        setBackgroundColor('#00b62d');
        console.log(window.GlobalCarritoActual);
    };

    function estaSeleccionado() {
        window.GlobalCarritoActual == props.carrito.id ? setBackgroundColor('#00b62d') : setBackgroundColor('#0d8f79');
    }

    useEffect(() => {
        function handleMouseMove(e) {
            // Aquí puedes hacer lo que necesites cuando se detecte movimiento del mouse
            estaSeleccionado();
        }
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Row className='carritoFila' style={{ backgroundColor: backgroundColor }} onClick={handleClick} >
            <Col md={2} >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/308/308833.png"
                    title="carrito"
                    alt="carrito"
                    width="100%"
                    height="90%"
                    style={{ maxHeight: "50px", minHeight: "50px", minWidth: "50px", maxWidth: "50px" }}
                />
            </Col>
            <Col md={10}>
                <h2 ><span>{props.carrito.id}: </span><span>{props.carrito.fecha_ultima_modificacion}</span></h2>
            </Col>

        </Row>
    );
}