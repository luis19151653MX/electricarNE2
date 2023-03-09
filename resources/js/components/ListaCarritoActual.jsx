import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ItemListaCarrito from "./ItemListaCarrito";

export default function ListaCarrito() {

    const navigate = useNavigate();

    useEffect(() => {
        if (GlobalUsuarioId === null) {
            navigate('/electricarNE2/public/Login');
        }
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
                setLista(response.data);
                console.log(lista);
            }).catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        function handleMouseMove(e) {
            // Aquí puedes hacer lo que necesites cuando se detecte movimiento del mouse
            loadLista();
        }
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Col md={3} lg={{ minWidth: '250px', maxWidth: '300px', width: "270px" }}>
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
        </Col>
    );
}