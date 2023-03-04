import { React, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
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
      <div class="col text-center">
        <h1><b>Nuestros productos</b></h1>
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <br></br>

        <br></br>
        {
          listProduct.map(auto => {
            return (
              <div class="col">
                <div class="cardProduct card mb-3 card"  style={{maxWidth:"450px", minWidth:"250px", maxHeight:"600px",minHeight:"380px"}} >
                  <img
                  style={{objectFit:"cover"}}
                    maxWidth="90%"
                    maxHeight="90%"
                    src={auto.imagen}
                    title={auto.modelo}
                    class="card-img-top"
                    alt={auto.modelo + ". " + auto.año} />
                  <div class="card-body" style={{position:"relative"}}>
                    <h3 class="card-title">{auto.modelo}</h3>
                    <h6 class="card-text">{"$" + auto.precio + " mxn"}</h6>
                    <br />
                    <Button
                      style={{
                        padding: 10 + "px",
                        backgroundColor: "#57cae7",
                        color: "#0a0a0a",
                        textDecoration: "none",
                        borderRadius: 15 + "px"
                      }}
                      onClick={() => {
                        console.log(auto.id);
                        navigate('/electricarNE2/public/ProductCard',{state:{autoID:auto.id}});
                      }}>Ver producto</Button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

/*
        <CardGroup>
          {listProduct.map(item => (<div key={item.id}><ItemProduct modelo={item.modelo} año={item.año} precio={item.precio} imagen={item.imagen} /></div>))}
        </CardGroup>
        */


