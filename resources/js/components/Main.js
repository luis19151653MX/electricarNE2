import React from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Routes} from "react-router-dom";

import Home from './Home';
import Navigation from './Navigation';
import ProductCard from './ProductCard';
import Login from './Login';

export default function Main() {
    return (
        <div className='App'>
            <Container>
                <BrowserRouter>
                <Routes>
                    <Route path="/electricarNE2/public"  element={<Navigation />} >
                        <Route index element={<Home />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="ProductCard" element={<ProductCard />} />
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