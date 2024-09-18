import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Removed Form import
import SignUp from './components/SignUp';
import Home from './components/Home';
import SignIn from './components/SignIn';
import CheckoutForm  from './components/CheckoutForm';

function App() {
  return (
  
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
       <Route path="/check" element={<CheckoutForm />} />

      </Routes>
    
  );
}

export default App;