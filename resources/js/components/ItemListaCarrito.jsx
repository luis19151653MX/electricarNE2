import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Button, InputGroup, CloseButton } from 'react-bootstrap';

export default function CarritoProducto(props) {

    const [producto, setProducto] = useState({});

    const loadProduct = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("id", props.lista.producto_id);
        await axios.post("http://127.0.0.1/electricarNE2/public/api/get_producto", data, config)
            .then(response => {
                setProducto(response.data);
            }).catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        loadProduct()
    }, [])


    return (
        <Col md={6} className="justify-content-md-center">
            
                        <Table style={{ textAlign: "center" }}>
                            <tbody>
                                <tr>
                                    <td><img
                                        width="220 px"
                                        height="120 px"
                                        src={producto.imagen}
                                        title="Producto"
                                        alt="Producto" />
                                    </td>

                                    <td><b>{producto.modelo}
                                        <br />{producto.año}
                                        <br />${producto.precio} mxn
                                    </b>
                                    </td>

                                    <td>
                                        <Button variant="primary" onClick={() => {
                                            //console.log(auto.id);
                                            //navigate('/react-example/ProductCard', { state: { autoID: producto.id } });
                                        }}> Ver producto</Button>
                                    </td>

                                    <td>
                                        <InputGroup className="mb-3">
                                        <CloseButton variant='black'
                                                        onClick={() => {
                                                        }

                                                        }>
                                                    </CloseButton>
                                        </InputGroup>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                
        </Col>
    );
}
//<h1>{props.lista.producto_id}</h1>