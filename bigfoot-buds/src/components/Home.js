import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import main1 from "../images/Bigfootmain1.png";
import main2 from "../images/Bigfootmain2.png";
import main3 from "../images/bigfootmain3.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import $ from "jquery"; // Import jQuery
import Popper from "popper.js"; // Import Popper.js
import "bootstrap/dist/js/bootstrap.min"; // Import Bootstrap JS

import "./style.css";

const Home = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggle = (event, contentClass) => {
    // Get the node of specific content class name
    const ele = document.getElementsByClassName(contentClass)[0];
    // Toggle on/off depending on classList being active or not
    if (ele.classList.contains("active")) {
      ele.classList.remove("active");
    } else {
      ele.classList.add("active");
    }
    // Update symbol to represent the state
    event.target.innerHTML = event.target.innerHTML === "+" ? "-" : "+";
  };
  const linkStyle = {
    display: "inline-flex", // Aligns items in a flex container
    width: "10rem", // Adjust width as needed
    height: "3rem", // Adjust height as needed
    borderRadius: "1.5rem", // Rounded corners
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "1rem", // Adjust font size as needed
    fontFamily: "Arial, Helvetica, sans-serif", // Apply specific font
    textDecoration: "none", // Removes underline from link
    border: "none", // Removes default border
    marginLeft: "10rem", // Adjust positioning as needed
    marginTop: "2rem", // Adjust positioning as needed
    transition: "background-color 0.3s", // Smooth hover effect
  };

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

  return (
    <div>
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

          <div style={{display: "flex", columnGap: 1.5 + "rem"}}>
            <Link to="/signup" style={buttonStyle}>
              Sign Up
            </Link>
            <Link to="/signIn" style={buttonStyle1}>
              Sign In
            </Link>
          </div>
        </div>
      </header>

      <main
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0 5%",
        }}
      >
        <div style={{ width: "30%" }}>
          <h1
            className="display-4"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            The Ultimate
            <span
              className="badge badge-secondary"
              style={{
                fontSize: "1.25rem",
                fontFamily: "'Times New Roman', serif",
                backgroundColor: "black",
              }}
            >
              New
            </span>
          </h1>
          <h2
            className="display-4"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Trios
          </h2>
          <h3
            className="display-4"
            style={{
              fontSize: "2.25rem",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            $299.99
          </h3>
          <h4 style={{ visibility: "hidden" }}>&nbsp;</h4>
          <h5
            className="display-4"
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: "1.25rem",
            }}
          >
            Featuring all three signature flavors in one exclusive collection
          </h5>
          <a href="https://example.com" style={linkStyle}>
            <span>Add to Cart</span>
          </a>
        </div>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ width: "30%", height: "100%", margin: "auto" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10 col-12">
                <ol className="carousel-indicators">
                  <li
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src={main1}
                      alt="First slide"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={main2}
                      alt="Second slide"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={main3}
                      alt="Third slide"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: "30%" }}>
          <div
            className="description container mt-4"
            style={{ fontFamily: "'Times New Roman'" }}
          >
            <section className="container mt-4 mb-4">
              <div className="row">
                <div className="">
                  <h2>Description</h2>
                  <div className="description-content">
                    <p>
                      The ultimate storage solution for cannabis enthusiasts who
                      demand both quality and style. Crafted with care and
                      wrapped in durable, rustic canvas, these jars are designed
                      to keep your cannabis fresh, potent, and protected.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <hr />
            <section className="mb-4">
              <h3>
                Ingredient
                <span
                  onClick={(e) => toggle(e, "ingredient")}
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                >
                  +
                </span>
              </h3>
              <div className="description-content">
                <p className="itemContent ingredient">
                  The ultimate storage solution for cannabis enthusiasts who
                  demand both quality and style.
                </p>
              </div>
            </section>
            <hr />
            <section className="mb-4">
              <h3>
                Testimonials
                <span
                  onClick={(e) => toggle(e, "testimonials")}
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                >
                  +
                </span>
              </h3>
              <div className="description-content">
                <p className="itemContent testimonials">
                  Crafted with care and wrapped in durable, rustic canvas, these
                  jars are designed to keep your cannabis fresh, potent, and
                  protected.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
