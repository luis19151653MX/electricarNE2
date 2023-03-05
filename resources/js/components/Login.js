import '../../css/login.css';
import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login-container">
            <div className="login-form-container">
                <h2 className="login-heading">Iniciar sesión</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu email" />
                        <Form.Text className="text-muted">
                            xxxx
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                    </Form.Group>
                    <div className="login-button-container">
                        <Button variant="primary" type="submit">
                            Iniciar sesión
                        </Button>
                    </div>
                </Form>
                <div className="signup-link-container">
                    Don't have an account?{" "}
                    <Link to="/signup" className="signup-link">
                        Sign up here
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
