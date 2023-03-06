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
                        Electricar
                    </Navbar.Brand>
                    <Navbar.Brand style={{ color: "#006655", fontSize: 18 + "pt" }} as={Link} to="/electricarNE2/public/Login" title="Logo">
                        Login
                    </Navbar.Brand>
                    <Navbar.Brand style={{ color: "#006655", fontSize: 18 + "pt" }} as={Link} to="/electricarNE2/public/Register" title="Logo">
                        registrase
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