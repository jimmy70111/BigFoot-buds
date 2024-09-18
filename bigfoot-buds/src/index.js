// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { ClerkProvider } from '@clerk/clerk-react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import App from './App';

// // Hardcode the Stripe publishable key for testing
// const stripePromise = loadStripe('pk_test_51PocQcAYZjhcYjPRdJNBbuNwM8WyIFBrLvFeM6g55OBdS2BQExIfZ84r3SZSeinYQ1LQrNRiKw1Oe4ZjqQlfh4vm00AzK3aXq2');

// ReactDOM.render(
//   <ClerkProvider
//     frontendApi="pk_test_aW5maW5pdGUtZ2Vja28tODEuY2xlcmsuYWNjb3VudHMuZGV2JA" // Replace with your Clerk frontend API
//     navigate={(to) => window.history.pushState(null, '', to)}
//   >
//     <Router>
//       <Elements stripe={stripePromise}>
//         <App />
//       </Elements>
//     </Router>
//   </ClerkProvider>,
//   document.getElementById('root')
// );


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <App />
//   </Router>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import App from './App';

// Hardcode the Stripe publishable key for testing
const stripePromise = loadStripe('pk_test_51PocQcAYZjhcYjPRdJNBbuNwM8WyIFBrLvFeM6g55OBdS2BQExIfZ84r3SZSeinYQ1LQrNRiKw1Oe4ZjqQlfh4vm00AzK3aXq2');

ReactDOM.render(
  <Router>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </Router>,
  document.getElementById('root')
);
