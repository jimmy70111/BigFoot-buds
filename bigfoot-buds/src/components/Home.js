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
    marginLeft: '96rem',
    marginTop: '-1rem',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
    transform: 'translateY(38px)' // Move the button up
};

const buttonStyle1 = {
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
    marginRight: 'auto',
    marginLeft: '85rem',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
    transform: 'translateY(-10px)' // Move the button up
};

 
  
  

  return (
    <div>
      <Link to="/signup" style={buttonStyle}>
        Sign Up
      </Link>
      <Link to="/signIn" style={buttonStyle1}>
        Sign In
      </Link>
    </div>
  );
};

export default Home;
