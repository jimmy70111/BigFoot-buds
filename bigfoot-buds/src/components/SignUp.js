import React, { useEffect, useState, useRef } from 'react';
import { Clerk } from '@clerk/clerk-js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Directly using the publishable key
const clerkPubKey = 'pk_test_aW5maW5pdGUtZ2Vja28tODEuY2xlcmsuYWNjb3VudHMuZGV2JA';

const SignUp = () => {
  const [clerk, setClerk] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const userButtonRef = useRef(null);
  const signUpRef = useRef(null);

  useEffect(() => {
    const initClerk = async () => {
      const clerkInstance = new Clerk(clerkPubKey);
      await clerkInstance.load();
      setClerk(clerkInstance);
      setIsLoaded(true);
    };

    initClerk();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (clerk.user && userButtonRef.current) {
        clerk.mountUserButton(userButtonRef.current);
      } else if (!clerk.user && signUpRef.current) {
        clerk.mountSignUp(signUpRef.current);  // Mount the sign-up component
      }
    }
  }, [isLoaded, clerk]);

 

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div id="app">
      {clerk.user ? (
        <div id="user-button" ref={userButtonRef}></div>
      ) : (
        <div id="sign-up" ref={signUpRef}></div>  // Updated ID to reflect sign-up
      )}
    </div>
  );
};

export default SignUp;