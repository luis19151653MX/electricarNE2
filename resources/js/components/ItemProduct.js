import React from 'react';
import { Container, Card} from 'react-bootstrap';
import '../../css/card.css';

export default function ItemProduct(props) {
    return (
        <Container>
            <br></br>
            <Card class="card" style={{ margin: "24px" }}>
                <div class="col text-center">
                    <div class="face front">
                        <Card.Img className="img" src={props.imagen} />
                        <h2>{props.modelo}</h2>
                    </div>
                    <Card.Body class="face back">
                        <Card.Title>Modelo: {props.modelo} </Card.Title>
                        <Card.Title> Año: {props.año}</Card.Title>
                        <Card.Title> Precio: {props.precio}</Card.Title>
                        
                    </Card.Body>
                </div>
            </Card>
            <br></br>
        </Container>
    );
}
