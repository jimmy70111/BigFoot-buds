import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton,
} from "@clerk/clerk-react";
import "./button.css";

const Nav = ({ userButtonRef, clerkInstance }) => {
  return (
    <header>
      <div className="d-flex align-items-center">
        <div className="logo-container">
          <img
            src={logo}
            className="img-fluid"
            alt="Logo"
            style={{ width: "160px", height: "auto" }}
          />
        </div>
        <div className="nav-container">
          <nav className="nav justify-content-center">
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
              to="/hybrid"
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
              to="/sativa"
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
              to="/indica"
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
              to="/contact"
              style={{
                color: "black",
                fontSize: "20px",
                fontFamily: "'Times New Roman', serif",
              }}
            >
              Contact
            </Link>
          </nav>
        </div>

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
    </header>
  );
};

export default Nav;
