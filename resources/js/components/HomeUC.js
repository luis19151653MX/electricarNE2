import React from 'react';
import '../../css/usuario.css';
import { Container } from 'react-bootstrap';
import HomeProducts from './UsuariosCompras';
import Footer from "./Footer";

export default function Home() {
    return (
       
        <Container fluid="true" >
            <div id="tableuno">
   
            <HomeProducts></HomeProducts>
            </div>
            <Footer></Footer>
          
        </Container>
    );
}
