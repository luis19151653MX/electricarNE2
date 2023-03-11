import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Home';
import Navigation from './Navigation';
import ProductCard from './ProductCard';
import Login from './Login';
import Register from './Register';
import Carrito from './Carrito';
import HomeUC from "./HomeUC";
import HomeUV from "./HomeUV";
import Profile from "./Profile";

export default function Main() {

    //se manda lmar solo una vez cuando se monta el componente
    useEffect(() => {
        const usuarioId = localStorage.getItem("usuarioId");
        if (usuarioId === null) {
          localStorage.setItem("usuarioId", null);
        }
      }, []);
      
    return (
        <div className='App'>
            <Container fluid style={{
                margin: 0,
                padding: 0
            }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/electricarNE2/public" element={<Navigation />} >
                            <Route index element={<Home />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="ProductCard" element={<ProductCard />} />
                            <Route path="Login" element={<Login />} />
                            <Route path="Register" element={<Register />} />
                            <Route path="Carrito" element={<Carrito />} />
                            <Route path="HomeUC" element={<HomeUC />} />
                            <Route path="Profile" element={<Profile />} />
                            <Route path="HomeUV" element={<HomeUV />} />
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