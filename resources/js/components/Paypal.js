import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import  "../../css/colores.css";

export default function Paypal(props) {
  const [pago, setPago] = useState({ pagan: props.total });

  //funcion que se llama a si misma
  (async function cargar() {
    pago.pagan = props.total;
  })();


  const cambioStatusVenta = async () => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        }
    };
    const data = new FormData();
    data.append("id", window.GlobalCarritoActual);
    await axios.post("http://127.0.0.1/electricarNE2/public/api/cambioStatusVenta", data, config)
        .then(response => {
            window.location.reload();
        }).catch(error => {
            console.log(error);
        });
}

  return (
      <PayPalScriptProvider options={{ "client-id": "ATopRVi_zcgIG4KmDjOQUzpKCm2yqwnNN4Zcon2ETEwWn2Q95xtM7SYeIHxuDUeusD_6GRxnFy6AMPhS" }}>
        <PayPalButtons 
          style={{ layout: "horizontal", color:"black", label:"checkout", tagline:"false" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: pago.pagan,
                  },
                },
              ],
            });
          }}
          onApprove={() => {
            console.log("carrito completado"),cambioStatusVenta()
          }
          }
        />
      </PayPalScriptProvider>
  );
}
Paypal.defaultProps = {
  total: '0'
}