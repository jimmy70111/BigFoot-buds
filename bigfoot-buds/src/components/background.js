import React from 'react';
import main from "../images/bigfootbudbackground.jpg";

const Background = () => {
  return (
    <main className="d-flex justify-content-center align-items-center">
      <img className="img-fluid w-auto" src={main} alt="Contact Image" />
    </main>
  );
};

export default Background;
