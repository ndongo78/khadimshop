import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51Ha3LfL35VcVkQhY0ivTQQ2DsMt58gABJyHFYCYwKaAUlhHKV3C4oaduF3ILxlX4gLaVeYfNQMhoBcB05CXzi2sc00NFArSKh4";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

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