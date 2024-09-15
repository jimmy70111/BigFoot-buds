import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const buttonStyle = {
    display: 'inline-flex',
    width: '10rem',
    height: '3rem',
    borderRadius: '1.5rem',
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '1rem',
    fontFamily: 'Arial, Helvetica, sans-serif',
    textDecoration: 'none',
    border: 'none',
    marginLeft: '80rem',
    marginTop: '2rem',
    transition: 'background-color 0.3s',
    cursor: 'pointer'
  };

  return (
    <div>
      <Link to="/signup" style={buttonStyle}>
        Sign Up
      </Link>
    </div>
  );
};

export default Home;
