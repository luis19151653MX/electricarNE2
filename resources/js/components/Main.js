import React from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Example from './Example';
export default function Maina() {
    return (
        <div className='App'>
            <Container>
                <h1>Hola</h1>
                <Example></Example>
            </Container>
        </div>
    )
}

if (document.getElementById('main')) {
    ReactDOM.render(<Maina />, document.getElementById('main'));
}