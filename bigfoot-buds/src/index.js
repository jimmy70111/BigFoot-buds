import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import App from "./App";
import { ClerkProvider } from '@clerk/clerk-react';

// Use environment variables for the keys
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

ReactDOM.render(
  <Router>
    {/* <Elements stripe={stripePromise}> */}
      <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    {/* </Elements> */}
  </Router>,
  document.getElementById("root")
);
