
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import App from "./App";
import { ClerkProvider } from '@clerk/clerk-react'

// Hardcode the Stripe publishable key for testing
const stripePromise = loadStripe(
  "pk_test_51PocQcAYZjhcYjPRdJNBbuNwM8WyIFBrLvFeM6g55OBdS2BQExIfZ84r3SZSeinYQ1LQrNRiKw1Oe4ZjqQlfh4vm00AzK3aXq2"
);

ReactDOM.render(
  <Router>
    <Elements stripe={stripePromise}>
      <ClerkProvider publishableKey={"pk_test_aW5maW5pdGUtZ2Vja28tODEuY2xlcmsuYWNjb3VudHMuZGV2JA"} afterSignOutUrl="/">
        <App />
      
      </ClerkProvider>
    </Elements>
  </Router>,
  document.getElementById("root")
);
