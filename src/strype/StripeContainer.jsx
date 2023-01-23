import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";



const stripeTestPromise = loadStripe(process.env.REACT_APP_PUBLIC_KEY);

const ELEMENTS_OPTIONS = {
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
      }
    ]
  };
const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise} options={ELEMENTS_OPTIONS}>
     <CheckoutForm />
    </Elements>
  );
};

export default Stripe;