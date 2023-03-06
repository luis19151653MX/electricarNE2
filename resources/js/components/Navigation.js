import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import "../../css/navigation.css";

export default function Navigation(){
    return (
        <Container fluid>
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="light"
                className='navbar-blur'>
                <Container >
                    <Navbar.Brand style={{ color: "#006655", fontSize: 18 + "pt" }} as={Link} to="/electricarNE2/public/Home" title="Logo">
                    <img src='../resources/imagenes/coche-icon-gif.gif' title="Logo" alt="Logo del proyecto" width="52" height="46" style={{ marginRight:'15px' }}/> {' '}
                        Electricar
                    </Navbar.Brand>
                    <Navbar.Brand style={{ color: "#006655", fontSize: 18 + "pt" }} as={Link} to="/electricarNE2/public/Login" title="Logo">
                        Login
                    </Navbar.Brand>
                    <Navbar.Brand style={{ color: "#006655", fontSize: 18 + "pt" }} as={Link} to="/electricarNE2/public/Carrito" title="Logo">
                        Carrito
                    </Navbar.Brand>
                    <Navbar.Brand style={{ color: "#006655", fontSize: 18 + "pt" }} as={Link} to="/electricarNE2/public/HomeUC" title="Logo">
                        UsuariosCompras
                    </Navbar.Brand>
                    <Navbar.Brand style={{ color: "#006655", fontSize: 18 + "pt" }} as={Link} to="/electricarNE2/public/Profile" title="Logo">
                        Perfil
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <section>
                <br></br>
                <br></br>
                <br></br>
                <Outlet></Outlet>
            </section>
        </Container>
    )
}