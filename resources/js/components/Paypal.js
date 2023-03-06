import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Container } from 'react-bootstrap'; 

export default function Paypal() {
  const [pago, setPago] = useState({ pagan: 0 });

  //funcion que se llama a si misma
  (async function cargar() {
    pago.pagan = 10;
  })();

  return (
    <Container fluid>
      <PayPalScriptProvider options={{ "client-id": "ATopRVi_zcgIG4KmDjOQUzpKCm2yqwnNN4Zcon2ETEwWn2Q95xtM7SYeIHxuDUeusD_6GRxnFy6AMPhS" }}>
        <PayPalButtons
          style={{ layout: "horizontal" }}
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
            console.log("carrito completado")
          }
          }
        />;
      </PayPalScriptProvider>

    </Container>
  );
}
Paypal.defaultProps = {
  total: '0'
}