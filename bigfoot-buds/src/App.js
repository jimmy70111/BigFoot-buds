import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Removed Form import
import Home from "./components/Home";
import CheckoutForm from "./components/CheckoutForm";
import Nav from "./components/Nav";
import Contact from "./components/contact"; 
import Hybrid from "./components/hybrid"; 
import Sativa from "./components/sativa"; 
import Indica from "./components/indica"; 




function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check" element={<CheckoutForm />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/hybrid" element={<Hybrid />} /> 
          <Route path="/sativa" element={<Sativa />} /> 
          <Route path="/indica" element={<Indica />} /> 

        </Routes>
      </main>
    </>
  );
}

export default App;
