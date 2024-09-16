import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Removed Form import
import SignUp from './components/SignUp';
import Home from './components/Home';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
