// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import SignIn from './components/SignIn';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />

       
      </Routes>
    </Router>
  );
}

export default App;
