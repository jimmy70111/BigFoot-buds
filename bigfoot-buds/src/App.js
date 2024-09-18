import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Removed Form import
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import CheckoutForm from "./components/CheckoutForm";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/check" element={<CheckoutForm />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
