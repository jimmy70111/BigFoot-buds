import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const buttonStyle = {
  display: "inline-flex",
  width: "10rem",
  height: "3rem",
  borderRadius: "1.5rem",
  backgroundColor: "black",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontSize: "1rem",
  fontFamily: "Arial, Helvetica, sans-serif",
  textDecoration: "none",
  border: "none",
  // marginLeft: "75rem",
  // marginTop: "-100rem",
  transition: "background-color 0.3s",
  cursor: "pointer",
  // transform: "translateY(-502px)", // Move the button up
};

const buttonStyle1 = {
  display: "inline-flex",
  width: "10rem",
  height: "3rem",
  borderRadius: "1.5rem",
  backgroundColor: "black",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontSize: "1rem",
  fontFamily: "Arial, Helvetica, sans-serif",
  textDecoration: "none",
  border: "none",
  // marginRight: "auto",
  // marginLeft: "65rem",
  transition: "background-color 0.3s",
  cursor: "pointer",
  // transform: "translateY(-550px)", // Move the button up
};

const Nav = () => {
  return (
    <header>
      <div className="container my-4 d-flex align-items-center">
        <div className="me-3">
          <img
            src={logo}
            className="img-fluid"
            alt="Logo"
            style={{ width: "160px", height: "auto" }}
          />
        </div>
        <nav className="nav justify-content-center flex-grow-1">
          <Link
            className="nav-link active"
            to="/"
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "'Times New Roman', serif",
            }}
          >
            Home
          </Link>
          <Link
            className="nav-link"
            to="/pages/hybrid"
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "'Times New Roman', serif",
            }}
          >
            Hybrid
          </Link>
          <Link
            className="nav-link"
            to="/pages/sativa"
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "'Times New Roman', serif",
            }}
          >
            Sativa
          </Link>
          <Link
            className="nav-link"
            to="/pages/indica"
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "'Times New Roman', serif",
            }}
          >
            Indica
          </Link>
          <Link
            className="nav-link"
            to="/pages/contact"
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "'Times New Roman', serif",
            }}
          >
            Contact
          </Link>
        </nav>

        <div style={{ display: "flex", columnGap: 1.5 + "rem" }}>
          <Link to="/signup" style={buttonStyle}>
            Sign Up
          </Link>
          <Link to="/signIn" style={buttonStyle1}>
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
