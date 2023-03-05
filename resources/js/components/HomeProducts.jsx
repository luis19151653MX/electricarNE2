import { React, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../css/homeProducts.css";

export default function IndexProduct() {
  const navigate = useNavigate();

  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const res = await axios.get('http://127.0.0.1/electricarNE2/public/api/index_productos')
    setListProduct(res.data)
  }

  return (
    <>
      <Col style={{ textAlign: 'center' }}>
        <h1><b>Nuestros productos</b></h1>
      </Col>
      <Col style={{ justifyContent: 'center' }}>
        <Row className="justify-content-md-center">
          <br></br>
          <br></br>
          {
            listProduct.map((auto) => {
              return (
                <Col className="cardProduct" style={{ maxHeight: "350px", minHeight: "250px", height: "300px", minWidth: "270px", maxWidth: "280px" }} 
                onClick={() => {
                  console.log(auto.id);
                  navigate('/electricarNE2/public/ProductCard',{state:{autoID:auto.id}});
                }}>
                  <Row>
                    <img
                      src={auto.imagen}
                      //imagen alternativa cuando no carga la imagen
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://cdn-icons-png.flaticon.com/512/2878/2878966.png";
                      }}
                      title={auto.modelo}
                      alt={auto.modelo + ". " + auto.año}
                      width="100%"
                      height="90%"
                      style={{ maxHeight: "220px",minHeight:"180px" }}
                    />
                  </Row>
                  <br></br>
                  <Row>
                    <h3 >{auto.modelo}</h3>
                    <h6 >{"$" + auto.precio + " mxn"}</h6>
                  </Row>
                  <br></br>
                  <br></br>
                </Col>
              )
            })
          }
        </Row>
      </Col>
    </>
  );
}

/*
        <CardGroup>
          {listProduct.map(item => (<div key={item.id}><ItemProduct modelo={item.modelo} año={item.año} precio={item.precio} imagen={item.imagen} /></div>))}
        </CardGroup>
        */


