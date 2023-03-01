import React from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Example from './Example';
import Home from './Home';
import Login from './Login';
import Navigation from './Navigation';
export default function Main() {
    return (
        <div className='App'>
            <Container>
                <BrowserRouter>
                <Routes>
                    <Route path="/electricarNE2/public"  element={<Navigation />} >
                        <Route index element={<Home />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Example" element={<Example />} />
                        <Route path="Login" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            </Container>
        </div>
    )
}

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}