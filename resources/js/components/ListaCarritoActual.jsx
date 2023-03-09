import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ItemListaCarrito from "./ItemListaCarrito";
import Paypal from "./Paypal";

export default function ListaCarrito() {

    const navigate = useNavigate();

    useEffect(() => {
        if (GlobalUsuarioId === null) {
            navigate('/electricarNE2/public/Login');
        } else loadLista();
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


    useEffect(() => {
        loadLista();
    }, []);

    useEffect(() => {
        function handleClick(e) {
            // Aquí puedes hacer lo que necesites cuando se detecte un clic en lugar de movimiento del mouse
            loadLista();
        }
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);


    return (
        <Col md={9} lg={{ minWidth: '250px', maxWidth: '300px', width: "270px" }}>
            <h1 className='titulo'> Productos del carrito ... </h1>
            {

                lista.map((lista) =>
                (
                    <div key={lista.id}>
                        <ItemListaCarrito lista={lista}></ItemListaCarrito>
                    </div>
                )
                )

            }
            <Paypal></Paypal>
        </Col>
    );
}