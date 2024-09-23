import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"; // Added useLocation
import Home from "./components/Home";
import CheckoutForm from "./components/CheckoutForm";
import Nav from "./components/Nav";
import Contact from "./components/contact"; 
import Hybrid from "./components/hybrid"; 
import Sativa from "./components/sativa"; 
import Indica from "./components/indica"; 
import Form from "./components/ContactForm";
import Background from "./components/background";
import AgeVerificationModal from "./components/AgeVerificationModal";
function App() {
  const location = useLocation(); // Get the current location

  return (
    <>  
    <AgeVerificationModal/>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check" element={<CheckoutForm />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/hybrid" element={<Hybrid />} /> 
          <Route path="/sativa" element={<Sativa />} /> 
          <Route path="/indica" element={<Indica />} /> 
          <Route path="/form" element={<Form />} /> 
        </Routes>
      </main>
      {/* Render Background only if the current path is not "/contact" */}
      {location.pathname !== '/contact' && <Background />}
    </>
  );
}

export default App;
