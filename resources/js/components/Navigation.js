import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'

//'linear-gradient(#AADEE0, #FFFFFF)' #0044FF"

export default function Navigation(){
    return (
        <div clas="container-fluid">
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="light"
                style={{ background: 'linear-gradient(#ebf4fa, #FFFFFF)' }}>
                <Container >
                    <Navbar.Brand style={{ color: "#006655", fontSize: 18 + "pt" }} as={Link} to="/electricarNE2/public/Home" title="Logo">
                        Electricar
                    </Navbar.Brand>
                    <Navbar.Brand style={{ color: "#006655", fontSize: 18 + "pt" }} as={Link} to="/electricarNE2/public/Example" title="Logo">
                        Example
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <section>
                <br></br>
                <br></br>
                <br></br>
                <Outlet></Outlet>
            </section>
        </div>
    )
}