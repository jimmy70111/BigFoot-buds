import React from "react";
import logo from "../images/original3.png";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton,
} from "@clerk/clerk-react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./button.css";

const Navigation = ({ userButtonRef, clerkInstance }) => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>
        <img
          src={logo}
          className="img-fluid"
          alt="Logo"
          style={{ width: "160px", height: "auto" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav justify-content-center ">
          <Nav.Link
            className="nav-link active"
            to="/"
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "'Arial', sans-serif",
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className="nav-link"
            to="/hybrid"
            style={{
              color: "rgb(139, 202, 223)",
              fontSize: "20px",
              fontFamily: "'Arial', sans-serif",
            }}
          >
            Hybrid
          </Nav.Link>
          <Nav.Link
            className="nav-link"
            to="/sativa"
            style={{
              color: "rgb(255, 0, 0) ",
              fontSize: "20px",
              fontFamily: "'Arial', sans-serif",
            }}
          >
            Sativa
          </Nav.Link>
          <Nav.Link
            className="nav-link"
            to="/indica"
            style={{
              color: "rgb(250, 142, 160)",
              fontSize: "20px",
              fontFamily: "'Arial', sans-serif",
            }}
          >
            Indica
          </Nav.Link>
          <Nav.Link
            className="nav-link"
            to="/contact"
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "'Arial', sans-serif",
            }}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <div className="col-auto">
        <div id="user-ops">
          <SignedOut>
            <SignInButton id="signin" />
            <SignUpButton id="signup" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </Navbar>
  );
};

export default Navigation;
