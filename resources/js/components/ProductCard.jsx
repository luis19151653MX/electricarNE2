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

    return (

        <Container>
            <br /> <br /> <br /> <br />
            
            {
                (location.state === null) ? <h1>No encontrado</h1>
                    : <>
                    <h1 className='colorVerde' style={{ fontSize: 24 + "pt",textAlign:"center" }}><b>{producto.modelo}</b></h1>
            <br /> <br /> <br />
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
                            </Col>
                        </Row>
                    </>
            }
        </Container>
    );
}