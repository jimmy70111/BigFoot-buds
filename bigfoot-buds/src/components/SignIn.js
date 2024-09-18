import React, { useEffect, useState, useRef } from 'react';
import { Clerk } from '@clerk/clerk-js';
import { useNavigate } from 'react-router-dom';

// Directly using the publishable key
const clerkPubKey = 'pk_test_aW5maW5pdGUtZ2Vja28tODEuY2xlcmsuYWNjb3VudHMuZGV2JA';

const SignIn = () => {
  const [clerk, setClerk] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userAvatar, setUserAvatar] = useState(null);
  const userButtonRef = useRef(null);
  const signInRef = useRef(null);
  const navigate = useNavigate();

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
        setUserAvatar(clerk.user.profileImageUrl); // Update user avatar
      } else if (!clerk.user && signInRef.current) {
        clerk.mountSignIn(signInRef.current);
      }
    }
  }, [isLoaded, clerk]);

  useEffect(() => {
    if (userAvatar) {
      navigate('/', { state: { user: { profileImageUrl: userAvatar } } });
    }
  }, [userAvatar, navigate]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div
      id="app"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {clerk.user ? (
        <div
          id="user-button"
          ref={userButtonRef}
          style={{ cursor: 'pointer' }}
        ></div>
      ) : (
        <div id="sign-in" ref={signInRef}></div>
      )}
    </div>
  );
};

export default SignIn;
