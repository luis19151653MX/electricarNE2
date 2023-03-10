import React, { useEffect, useState } from 'react';
import { Table, Button, InputGroup, CloseButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../../css/carrito.css";

export default function CarritoProducto(props) {

    const navigate = useNavigate();

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

    const cambioStatus = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("id", props.lista.id);
        await axios.post("http://127.0.0.1/electricarNE2/public/api/cambiostatus_lista_carritos", data, config)
            .then(response => {
                window.location.reload();
            }).catch(error => {
                console.log(error);
            });
    }




    useEffect(() => {
        loadProduct()
    }, [])


    return (

            <Table className='listaFila'>
                <tbody>
                    <tr>
                        <td><img
                            //imagen alternativa cuando no carga la imagen
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = "https://www.evoximages.com/wp-content/uploads/2021/09/Forcolorspin2.gif";
                            }}
                            width="220 px"
                            height="120 px"
                            src={producto.imagen}
                            title={producto.modelo}
                            alt={producto.modelo} />
                        </td>

                        <td><b>{producto.modelo}
                            <br />{producto.año}
                            <br />${producto.precio} mxn
                        </b>
                        </td>

                        <td>
                            <Button variant="primary" onClick={() => {
                                navigate('/electricarNE2/public/ProductCard', { state: { autoID: producto.id } });
                            }}> Ver producto</Button>
                        </td>

                        <td>
                            <InputGroup className="mb-3">
                                <CloseButton
                                    onClick={() => {
                                        cambioStatus()
                                    }
                                    }>
                                </CloseButton>
                            </InputGroup>
                        </td>
                    </tr>
                </tbody>
            </Table>
    );
}
//<h1>{props.lista.producto_id}</h1>