import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Carrusel() {
    return (
        <Carousel fade>
            <Carousel.Item interval={1000}>
                <div class="col text-center">
                    <img
                        className="img-fluid shadow-4"
                        src="http://www.diamondpearlz.com/wp-content/uploads/2015/12/banner-1.jpg"
                        class="d-block w-100"
                        alt="First slide"
                        title="Carousel1"
                    />
                </div>
                <Carousel.Caption>
                    <h3 style={{ textAlign: "center", backgroundColor: "rgba(255,255,255, .2)", backdropFilter: "blur(10px)" }}>VENTA</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <div class="col text-center">
                    <img
                        className="img-fluid shadow-4"
                        src="https://www.carrepairadelaidesa.com.au/wp-content/uploads/2021/10/Car-Engine-Repair-Replacement-Banner.png"
                        class="d-block w-100"
                        alt="Second slide"
                        title="Carousel2"
                    />
                </div>
                <Carousel.Caption>
                    <h3 style={{ textAlign: "center", backgroundColor: "rgba(255,255,255, .2)", backdropFilter: "blur(10px)" }} >MANTENIMIENTO</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <div class="col text-center">
                    <img
                        className="img-fluid shadow-4 "
                        src="https://la-pajarita.es/wp-content/uploads/productos-sostenibles-para-hosteleria-ecofriendly-lapajarita-mapelor.jpg"
                        class="d-block w-100"
                        width={721}
                        alt="Third slide"
                        title="Carousel2"
                    />
                </div>
            </Carousel.Item>

        </Carousel>
    );
}

