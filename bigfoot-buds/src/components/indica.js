import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import indica4 from "../images/indica4.jpg";
import indica2 from "../images/indica2.jpg";
import indica3 from "../images/indca3.jpg";
import { Link } from 'react-router-dom';



import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import $ from "jquery"; // Import jQuery
import Popper from "popper.js"; // Import Popper.js
import "bootstrap/dist/js/bootstrap.min"; // Import Bootstrap JS

import "./style.css";

const Indica = () => {
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
    fontSize: "1.2rem", // Adjust font size as needed
    textDecoration: "none", // Removes underline from link
    border: "none", // Removes default border
    marginLeft: "10rem", // Adjust positioning as needed
    marginTop: "2rem", // Adjust positioning as needed
    transition: "background-color 0.3s", // Smooth hover effect
    fontFamily: "'Bodoni MT', Bodoni, serif", // Updated font family

  };


  return (
    <div>
      <main
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0 5%",
        }}
      >
        <div className="flex-container">
          <div className="item-container">
            <h1
              className="display-4"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Indica
            </h1>
            <h2
              className="display-4"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
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
            <Link to="/form" style={linkStyle}>
              <span>Wholesales</span>
            </Link>
          </div>


          <div className="img-container">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={indica4}
                    alt="First slide"
                    style={{ objectFit: "cover", height: "auto", width: "auto" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={indica2}
                    alt="Second slide"
                    style={{ objectFit: "cover", height: "auto", width: "auto" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={indica3}
                    alt="Third slide"
                    style={{ objectFit: "cover", height: "auto", width: "auto" }}
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



          <div className="description-container">
            <div
              className="description container mt-4"
              style={{ fontFamily: "'Times New Roman'" }}
            >
              <section className="mt-4 mb-4">
                <div>
                  <div>
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
                  Ingredient&nbsp;
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
                  Testimonials&nbsp;
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
        </div>
      </main >
    </div >
  );
};

export default Indica;
