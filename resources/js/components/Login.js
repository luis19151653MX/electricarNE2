import '../../css/login.css';
import React from "react";
import { Form, Button, Container, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
    const [login, setLogin] = React.useState({
        email: '',
        contraseña: '',
    });

     const onChangeLogin = (e) => {
         e.persist();
         setLogin({ ...login, [e.target.name]: e.target.value });
     };

     //modal
    const [showAlertLogin, setShowAlertLogin] = React.useState(false);
    const alertLoginClose = () => setShowAlertLogin(false);
    const alertLoginShow = () => setShowAlertLogin(true);


    const loginC = async (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("email", login.email);
        formData.append("contraseña", login.contraseña);
        await axios.post("http://127.0.0.1/electricarNE2/public/api/login", formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.status === 200) {
                console.log('Correcto');
            }
        }).catch(error => {
            console.log(error);
            alertLoginShow();
        });
    }

    return (
        <div className="login-container">
            <div className="login-form-container">
                <h2 className="login-heading">Iniciar sesión</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Ingresa tu email"
                            autoFocus
                            name="email"
                            value={login.email}
                            onChange={onChangeLogin}
                        />
                    </Form.Group>

                    <br />

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            maxLength="12"
                            minLength={8}
                            placeholder="Ingresa tu contraseña"
                            name="contraseña"
                            value={login.contraseña}
                            onChange={onChangeLogin}
                        />
                    </Form.Group>
                    <div className="login-button-container">
                        <Button variant="primary" type="submit" onClick={loginC}>
                            Iniciar sesión
                        </Button>
                    </div>
                </Form>
                <div className="signup-link-container">
                    ¿No tienes una cuenta?{" "}
                    <Link to="/electricarNE2/public/Register" className="signup-link">
                        Regístrate aquí
                    </Link>
                </div>
            </div>
            <Modal show={showAlertLogin} onHide={alertLoginClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Advertencia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>El correo o la contraseña no coinciden.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={alertLoginClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Login;
