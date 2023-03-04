import React from 'react';
import { Container } from 'react-bootstrap';
import HomeProducts from './HomeProducts';
import Carrusel from "./HomeCarousel";

export default function Home() {
    return (
        <Container fliud>
            <Carrusel></Carrusel>
            <div>
                <br></br>
            </div>
            <HomeProducts></HomeProducts>
        </Container>
    );
}
