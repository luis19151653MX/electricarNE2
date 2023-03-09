import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col, Toast, ToastContainer, Table, Modal, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import colores from "../../css/colores.css";

export default function UserProfile() {
    const navigate = useNavigate();
    const [userId, setUsuarioId] = useState(window.GlobalUsuarioId);
    const [usuario, setUsuario] = useState({});

    const loadUser = async () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const data = new FormData();
        data.append("id", userId);
        await axios.post("http://127.0.0.1/electricarNE2/public/api/show_usuarios", data, config)
            .then(response => {
                console.log(response.data);
                setUsuario(response.data);
            }).catch(error => {
                console.log(error);
            });
    }
     function cerrarSesion(){
        window.GlobalUsuarioId=null;
        navigate('/electricarNE2/public/Home');
     }

    useEffect(() => {
        loadUser()
    }, [])

    return (
        <Container>
            <br /> <br /> <br />
            <h1 align="center"> <span className="colorVerde">Perfil del usuario</span></h1>
            <br />
            <Row>
                <Col>
                    <div class="card text-left">
                        <div class="card-header"><h3>
                            {usuario.nombre}
                        </h3>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title"><b>Información adicional del usuario:</b></h4>
                            <p class="card-text"><b>Teléfono: </b> {usuario.telefono}</p>
                            <p class="card-text"><b>Dirección: </b> {usuario.direccion}</p>
                            <p class="card-text"><b>E-mail: </b> {usuario.email}</p>
                            <p class="card-text"><b>Fecha de nacimiento: </b> {usuario.fecha_cumpleaños}</p>
                            <p class="card-text"><b>Tipo de cliente: </b> {usuario.tipo}</p>
                            <Button variant="success" onClick={cerrarSesion} >Cerrar Sesión</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}