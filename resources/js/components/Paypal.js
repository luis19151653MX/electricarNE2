import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Paypal(props) {
  const [pago, setPago] = useState({ pagan: props.total });

  //funcion que se llama a si misma
  (async function cargar() {
    pago.pagan = props.total;
  })();

  return (
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
        />
      </PayPalScriptProvider>
  );
}
Paypal.defaultProps = {
  total: '0'
}