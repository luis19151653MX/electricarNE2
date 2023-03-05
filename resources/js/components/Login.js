import '../../css/login.css';
import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
    const [Login, setLogin] = React.useState({
        email: '',
        password: '',
        flag: false
    });

    const onChangeLogin = (e) => {
        e.persist();
        setLogin({ ...Login, [e.target.name]: e.target.value });
    };

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
                            value={Login.email}
                            onChange={onChangeLogin}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            required
                            type="password"

                            placeholder="Ingresa tu contraseña"
                            name="pasword"
                            value={Login.password}
                            onChange={onChangeLogin}
                        />
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
