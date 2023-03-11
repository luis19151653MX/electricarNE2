import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ItemListaCarrito from "./ItemListaCarrito";
import PayPal from "./Paypal";

export default function ListaCarrito() {

    const navigate = useNavigate();

    useEffect(() => {
        if (GlobalUsuarioId === null) {
            navigate('/electricarNE2/public/Login');
        } else {
            loadLista();
            loadTotal();}
    }, [navigate]);


    const [lista, setLista] = useState([]);
    const loadLista = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("carrito_id", window.GlobalCarritoActual);
        await axios.post("http://127.0.0.1/electricarNE2/public/api/index_lista_carritos", data, config)
            .then(response => {
                console.log("lista del carrito id:" + window.GlobalCarritoActual);
                setLista(response.data);
            }).catch(error => {
                console.log(error);
            });
    }

    const loadTotal = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("id", window.GlobalCarritoActual);
        await axios.post("http://127.0.0.1/electricarNE2/public/api/totalPagar_carrito", data, config)
            .then(response => {
                console.log("total:"+response.data);
                window.GlobalTotalPagar=response.data;
            }).catch(error => {
                console.log(error);
            });
    }


    useEffect(() => {
        loadLista();
        loadTotal();
    }, []);

    useEffect(() => {
        function handleClick(e) {
            // Aquí puedes hacer lo que necesites cuando se detecte un clic en lugar de movimiento del mouse
            loadLista();
            loadTotal();
        }
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);


    return (
        <div style={{display:'flex'}}>
            <Col md="auto">
                <h1 className='titulo'> Productos del carrito: {window.GlobalCarritoActual} </h1>
            {
                lista.map((lista) =>
                (
                    <div key={lista.id}>
                        <ItemListaCarrito lista={lista}></ItemListaCarrito>
                    </div>
                )
                )
            }
            </Col>
            <Col style={{width:"250px"}}>
                <h1 className='titulo'> Total a Pagar: ${window.GlobalTotalPagar} MXN </h1>
                <PayPal total={window.GlobalTotalPagar}></PayPal>
            </Col>
            
        </div>
    );
}