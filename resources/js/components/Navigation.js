import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import "../../css/navigation.css";

export default function Navigation() {
    function cerrarSesion() {
        // Aquí puedes escribir el código para cerrar la sesión del usuario
        // por ejemplo, eliminando los datos del usuario de localStorage
        localStorage.removeItem('usuarioId');
        window.GlobalUsuarioId = null;
        // Redireccionar a la página de inicio de sesión
        window.location.href = '/electricarNE2/public/Home';
    }

    return (

        <div className="container-fluid">
            <Navbar className='navbar-blur' fixed="top" collapseOnSelect expand="lg" variant="light" >
                <Container>
                    <Navbar.Brand style={{ color: "#006655", fontSize: 18 + "pt" }} as={Link} to="/electricarNE2/public/Home" title="Logo">
                        <img src='../resources/imagenes/coche-icon-gif.gif' title="Logo" alt="Logo del proyecto" width="52" height="46" style={{ marginRight: '15px' }} /> {' '}
                        Electricar
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ borderColor: "#006655" }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand as={Link} to="/electricarNE2/public/Login" title="Login"><h4 style={{ color: "#006655", fontSize: 18 + "pt", textAlign: "center" }}>
                            Login </h4>
                        </Navbar.Brand>
                        <Navbar.Brand onClick={cerrarSesion} title="Cerrar Sesión"><h4 style={{ color: "#006655", fontSize: 18 + "pt", textAlign: "center", cursor: "pointer" }}>
                            Cerrar Sesión </h4>
                        </Navbar.Brand>
                        <Navbar.Brand as={Link} to="/electricarNE2/public/Carrito" title="Carrito"><h4 style={{ color: "#006655", fontSize: 18 + "pt", textAlign: "center" }}>
                            Carrito </h4>
                        </Navbar.Brand>
                        <Navbar.Brand as={Link} to="/electricarNE2/public/HomeUC" title="UsuariosCompras"><h4 style={{ color: "#006655", fontSize: 18 + "pt", textAlign: "center" }}>
                            UsuariosCompras </h4>
                        </Navbar.Brand>
                        <Navbar.Brand as={Link} to="/electricarNE2/public/Profile" title="Perfil"><h4 style={{ color: "#006655", fontSize: 18 + "pt", textAlign: "center" }}>
                            Perfil </h4>
                        </Navbar.Brand>
                        <Navbar.Brand as={Link} to="/electricarNE2/public/HomeUV" title="UsuarioVentas"><h4 style={{ color: "#006655", fontSize: 18 + "pt", textAlign: "center" }}>
                            UsuariosVentas </h4>
                        </Navbar.Brand>
                    </Navbar.Collapse>
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

/*

<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/">About</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
*/