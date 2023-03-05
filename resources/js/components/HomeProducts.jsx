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
      <Col style={{textAlign:'center'}}>
        <h1><b>Nuestros productos</b></h1>
      </Col>
      <Container>
        <Col>
          <Row className="justify-content-md-center">
            <br></br>
            <br></br>
            {
              listProduct.map(auto => {
                return (
                  <Col className="cardProduct" >
                    <Row>
                      <img
                        src={auto.imagen}
                        //imagen alternativa cuando no carga la imagen
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src="https://cdn-icons-png.flaticon.com/512/2878/2878966.png";
                        }}
                        title={auto.modelo}
                        alt={auto.modelo + ". " + auto.año} />
                    </Row>
                    <Row>
                      <h3 >{auto.modelo}</h3>
                      <h6 >{"$" + auto.precio + " mxn"}</h6>
                    </Row>
                  </Col>
                )
              })
            }
          </Row>
        </Col>

      </Container>
    </>
  );
}

/*
        <CardGroup>
          {listProduct.map(item => (<div key={item.id}><ItemProduct modelo={item.modelo} año={item.año} precio={item.precio} imagen={item.imagen} /></div>))}
        </CardGroup>
        */


