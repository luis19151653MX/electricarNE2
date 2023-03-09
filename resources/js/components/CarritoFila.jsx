import React, { useEffect, useState } from 'react';
import { Row, Col, InputGroup, CloseButton } from 'react-bootstrap';
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
        function handleClick(e) {
            // Aquí puedes hacer lo que necesites cuando se detecte un clic en lugar de movimiento del mouse
            estaSeleccionado();
        }
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    //click eliminar un carrito
    const cambioStatus = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("id", props.carrito.id);
        await axios.post("http://127.0.0.1/electricarNE2/public/api/cambiostatus_carrito", data, config)
            .then(response => {
                console.log(response);
                window.location.reload();
            }).catch(error => {
                console.log(error);
            });
    }


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
            <Col md={8}>
                <h2 ><span>{props.carrito.id}: </span><span>{props.carrito.fecha_ultima_modificacion}</span> </h2>
            </Col>
            <Col>
                <InputGroup md={2}>
                    <CloseButton
                        onClick={() => {
                            cambioStatus()
                        }
                        }>
                    </CloseButton>
                </InputGroup>
            </Col>

        </Row>
    );
}