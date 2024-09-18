import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton, SignUpButton} from '@clerk/clerk-react'
import "./button.css"

const Nav = ({ userButtonRef, clerkInstance }) => {
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

        <div id="user-ops">
        <SignedOut>
          <SignInButton id="signin"/>
          <SignUpButton id="signup"/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </div>

      </div>
    </header>
  );
};

export default Nav;
