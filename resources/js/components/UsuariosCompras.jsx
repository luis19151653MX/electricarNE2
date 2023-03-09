import { React, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../css/homeProducts.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/usuario.css';
//idea para reproducir sonido: modal que pregunte si desea permitir sonido en la pagina

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
                <table class="table table-dark table-striped" >

    <tr>
        <th class="ii">Id</th>
        <th class="m">Modelo</th>
        <th class="i"> Descripcion</th>
        <th class="g">Stock</th>
        <th class="g">Precio</th>
        <th class="g">Marca</th>
        <th class="g">Categoria</th>
        <th class="g">Año</th>
        <th class="g">Tipo</th>
    </tr>
    
    </table>

          {
            listProduct.map((auto) => {
              return (
                <Col key={auto.id} className="cardProduct" 
                onClick={() => {
                  console.log(auto.id);
                  navigate('/electricarNE2/public/ProductCard',{state:{autoID:auto.id}});
                }}>
                  
                  <Row>
                  

                  <table class="table table-dark table-striped" id="table" >
    <tr>
            <td>{auto.id }</td> 
            <td>{auto.modelo }</td>
            <td class="id"> {auto.descripcion} </td>
            <td>{auto.stock}</td>
            <td>{"$" + auto.precio + " mxn"}</td>
            <td>{auto.marca}</td>
            <td>{auto.categoria}</td>
            <td>{auto.año}</td>
            <td>{auto.tipo}</td>
          </tr>
              
          
</table>
              
         
                  </Row>
                  
                </Col>
              )
            })
          }
     
    </>
  );
}
