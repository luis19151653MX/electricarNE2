import '../../css/login.css';
import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login-container">
            <div className="login-form-container">
                <h2 className="login-heading">Login</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="login-button-container">
                        <Button variant="primary" type="submit">
                            Submit
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
