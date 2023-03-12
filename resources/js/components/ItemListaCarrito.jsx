import React, { useEffect, useState } from 'react';
import { Table, Button, InputGroup, CloseButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../../css/carrito.css";

export default function CarritoProducto(props) {
    const navigate = useNavigate();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        loadProduct()
    }, [])

    

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

    return (

            <Table className='listaFila'>
                <tbody>
                    <tr>
                        <td onClick={() => {
                                navigate('/electricarNE2/public/ProductCard', { state: { autoID: producto.id } });
                            }}><img
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

                        <td style={{minWidth:"200px", fontSize:"16px"}} 
                        onClick={() => {
                                navigate('/electricarNE2/public/ProductCard', { state: { autoID: producto.id } });
                            }}><b>{producto.modelo}
                            <br />{producto.año}
                            <br />${producto.precio} mxn
                        </b>
                        </td>

                        <td style={{cursor: "default"}}>
                            <InputGroup className="mb-3">
                                <CloseButton style={{cursor: "crosshair"}}
                                    onClick={props.borrarProducto}>
                                </CloseButton>
                            </InputGroup>
                        </td>
                    </tr>
                </tbody>
            </Table>
    );
}