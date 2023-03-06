import React from 'react';
import { Container } from 'react-bootstrap';
import HomeProducts from './HomeProducts';
import Carrusel from "./HomeCarousel";
import Footer from "./Footer";

export default function Home() {
    return (
        <Container fluid="true">
                <Carrusel></Carrusel>
            <div>
                <br></br>
            </div>
            <HomeProducts></HomeProducts>

            <Footer></Footer>
        </Container>
    );
}
