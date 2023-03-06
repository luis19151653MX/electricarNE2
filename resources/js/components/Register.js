import '../../css/login.css';
import React from "react";
import { Form, Button, Container, Modal, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
    const [register, setRegister] = React.useState({
        nombre: '',
        contraseña: '',
        telefono: '',
        direccion: '',
        email: '',
        fecha_cumpleaños: ''
    });

    const onChangeRegister = (e) => {
        e.persist();
        setRegister({ ...register, [e.target.name]: e.target.value });
    };

    //modal
    const [showAlertRegister, setShowAlertRegister] = React.useState(false);
    const alertRegisterClose = () => setShowAlertRegister(false);
    const alertRegisterShow = () => setShowAlertRegister(true);

    const [showSaveUsuario, setShowSaveUsuario] = React.useState(false);
    const saveUsuarioClose = () => setShowSaveUsuario(false);
    const saveUsuarioShow = () => setShowSaveUsuario(true);

    const RegisterC = async (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("nombre", register.nombre);
        formData.append("contraseña", register.contraseña);
        formData.append("telefono", register.telefono);
        formData.append("direccion", register.direccion);
        formData.append("email", register.email);
        formData.append("fecha_cumpleaños", register.fecha_cumpleaños);

        await axios.post("http://127.0.0.1/electricarNE2/public/api/store_usuarios", formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            console.log('response: correcto');
            console.log(response);
            saveUsuarioShow();
        }).catch(error => {
            console.log(error);
            alertRegisterShow();
        });
    }

    return (
        <div className="login-container">
            <div className="register-form-container">
                <h2 className="login-heading">Regístrate</h2>
                <Form onSubmit={RegisterC}>
                    <Row >
                        <Form.Group as={Col} controlId="formBasicNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                maxLength="250"
                                minLength={4}
                                placeholder="Ingresa tu nombre"
                                autoFocus
                                name="nombre"
                                value={register.nombre}
                                onChange={onChangeRegister}
                            />
                        </Form.Group>
                        <br />

                        <Form.Group as={Col} controlId="formBasicFechaCumpleaños">
                            <Form.Label>Fecha de Nacimiento</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                maxLength="12"
                                minLength={4}
                                placeholder="Ej. 2020/12/02"
                                name="fecha_cumpleaños"
                                value={register.fecha_cumpleaños}
                                onChange={onChangeRegister}
                            />
                        </Form.Group>
                    </Row>
                    <br />
                    <Row>
                        <Form.Group as={Col} controlId="formBasicDireccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                maxLength="250"
                                minLength={4}
                                placeholder="Ingresa tu dirección"
                                name="direccion"
                                value={register.direccion}
                                onChange={onChangeRegister}
                            />
                        </Form.Group>

                        <br />

                        <Form.Group as={Col} controlId="formBasicTelefono">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                min="1"
                                placeholder="Ingresa tu teléfono"
                                name="telefono"
                                value={register.telefono}
                                onChange={onChangeRegister}
                            />
                        </Form.Group>
                        </Row>
                        <br />
                        <Row>
                        <Form.Group as={Col} controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Ej. nombre@gmail.com"
                                autoFocus
                                name="email"
                                value={register.email}
                                onChange={onChangeRegister}
                            />
                        </Form.Group>

                        <br />

                        <Form.Group as={Col} controlId="formBasicContraseña">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                maxLength="12"
                                minLength={8}
                                placeholder="Ingrese tu contraseña"
                                name="contraseña"
                                value={register.contraseña}
                                onChange={onChangeRegister}
                            />
                        </Form.Group>
                        </Row>
                        <div className="login-button-container">
                            <Button variant="primary" type="submit">
                                Registrar
                            </Button>
                        </div>
                </Form>
            </div>
            <Modal show={showSaveUsuario} onHide={saveUsuarioClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Guardado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Te registraste correctamente.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={saveUsuarioClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showAlertRegister} onHide={alertRegisterClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Advertencia</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <p>Ningún campo debe estar vacío.</p>
                    <p>El teléfono y correo debe ser únicos.</p>
                    <p>Número de Télefono  10-12 digitos.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={alertRegisterClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Register;
