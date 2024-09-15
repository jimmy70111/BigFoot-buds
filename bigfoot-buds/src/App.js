// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
       
      </Routes>
    </Router>
  );
}

export default App;
