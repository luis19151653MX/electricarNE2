import React from 'react';
import { Container } from 'react-bootstrap';
import '../../css/footer.css';

export default function Footer(){
    return (
        <Container fluid>
            <footer>
                <div className="container pt-5 border-bottom">
                    <div className="row text-center">
                        <div style={{ textAlign: "center" }}>
                            <marquee direction="right" SCROLLDELAY="30">
                                <img
                                    src='../resources/imagenes/coche-icon-gif.gif'
                                    title="Logo"
                                    alt="Logo del Proyecto"
                                    width="130"
                                    height="118" />
                            </marquee>
                        </div>
                        <h4 className="mb-4 font-weight-bold text-uppercase">Contactos</h4>
                        <ul className="list-group">
                            <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                <a
                                    href="https://www.google.com/intl/es-419/gmail/about/"
                                    title="gmail"
                                    target="_blank"
                                    style={{ marginRight: 35 + "px" }}>
                                    <img
                                        src='../resources/imagenes/gmail.png'
                                        title="Gmail"
                                        alt="Gmail"
                                        width="45"
                                        height="45" />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=100087754681331"
                                    title="facebook"
                                    target="_blank">
                                    <img
                                        src='../resources/imagenes/facebook.png'
                                        title="Facebook"
                                        alt="Facebook"
                                        width="45"
                                        height="45" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <h4 style={{
                    textAlign: "center",
                    marginTop: "15" + "px"
                }}>??Qui??nes somos?</h4>
                <p style={{
                        textAlign:"center",
                        marginTop: "15" + "px"
                    }} >Somos un negocio electr??nico especializado en la venta de carros modificados con motores el??ctricos, los cuales
                        ofrecen una autonom??a de 250 kil??metros, adem??s visto desde el cuidado del ambiente, estos veh??culos generan menos emisiones de CO2.
                    </p>
                <div>
                    <ul className="list-group" style={{ textAlign: "center" }}>
                        <li className="list-group-item bg-transparent border-0 p-0 mb-2"
                            style={{ fontSize: "20" + "px" }}>
                            <img
                                src='../resources/imagenes/Cookie.png'
                                title="cookies"
                                alt="Coookies"
                                width="35"
                                height="35" 
                                />
                            <a
                                href="http://www.google.com/intl/es-419/policies/technologies/types/"
                                title="gmail"
                                alt="gmail"
                                target="_blank"><i
                                    className="fa fa-google-plus mr-1"></i>Cookies</a>

                        </li>
                    </ul>
                </div>

                <br></br>
            </footer>
        </Container >
    );

}
