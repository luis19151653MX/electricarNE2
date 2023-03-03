import { React, useEffect, useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import axios from 'axios';
import ItemProduct from './ItemProduct';

export default function IndexProduct(){
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
      getProduct()
    }, [])

  const getProduct = async () => {
    const res = await axios.get('http://127.0.0.1/electricarNE2/public/api/index_productos')
    setListProduct(res.data)
  }

  return (
    <Container>
      <br></br>
      <div class="col text-center">
        <h1><b>Nuestros productos</b></h1>
      </div>
      <br></br>

      <div>
        <CardGroup>
          {listProduct.map(item => (<div key={item.id}><ItemProduct modelo={item.modelo} año={item.año} precio={item.precio} imagen={item.imagen} /></div>))}
        </CardGroup>
      </div>
    </Container>
  );
}


