import React from "react";
import footer_vector01 from "../assets/images/footer_vector01.png";
import footer_vector02 from "../assets/images/footer_vector02.png";
import footer_vector03 from "../assets/images/footer_vector03.png";
import footer_bg from "../assets/bg/footer_bg.jpg";
import discover from "../assets/icon/discover.png";
import stripe from "../assets/icon/stripe.png";
import visa_2 from "../assets/icon/visa_2.png";
import ae_02 from "../assets/icon/ae_02.png"; // Make sure this path is correct
import logo from "../assets/logo/mdq-logo.svg";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div
        className="footer-top footer-bg fix"
        style={{ backgroundImage: `url(${footer_bg})` }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget mb-50">
                <div className="footer-logo">
                  <img src={logo} alt="Logo" />
                </div>
                <div className="footer-text">
                  <p>
                    MDQ International Farming of relse etras sheets connig
                    passag.
                  </p>
                  <div className="footer-contact">
                    <ul>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Address: </span>216, Samiah Garden City, Hapur,
                        Uttar Pradesh 245101
                      </li>
                      <li>
                        <i className="fas fa-headphones"></i>
                        <span>Phone: </span>+91 98189 57200
                      </li>
                      <li>
                        <i className="fas fa-envelope-open"></i>
                        <span>Email: </span>mdqinternational01@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="footer-widget mb-50">
                <div className="fw-title mb-35">
                  <h5>Products</h5>
                </div>
                <div className="fw-link">
                  <ul>
                    <li>
                      <a href="#">RICE DDGS</a>
                    </li>
                    <li>
                      <a href="#">CORN DDGS</a>
                    </li>
                    <li>
                      <a href="#">TURMERIC DOC</a>
                    </li>
                    <li>
                      <a href="#">CORN GLUTEN</a>
                    </li>
                    <li>
                      <a href="#">MUSTARD DOC</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="footer-widget mb-50">
                <div className="fw-title mb-35">
                  <h5>Products</h5>
                </div>
                <div className="fw-link">
                  <ul>
                    <li>
                      <a href="#">DORB</a>
                    </li>
                    <li>
                      <a href="#">MBM</a>
                    </li>
                    <li>
                      <a href="#">LEATHER MEAL</a>
                    </li>
                    <li>
                      <a href="#">OTHER AGRO PRODUCTS</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget mb-50">
                <div className="fw-title mb-35">
                  <h5>Follow us</h5>
                </div>
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-widget mb-50">
                <div className="fw-title mb-30">
                  <h5>Newsletter Sign Up</h5>
                </div>
                <div className="footer-newsletter">
                  <form action="#">
                    <input type="text" placeholder="Enter your email" />
                    <button>
                      <i className="fas fa-rocket"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-shape fb-shape1 running">
          <img src={footer_vector01} alt="Footer Vector 1" />
        </div>
        <div className="footer-bottom-shape fb-shape2">
          <img src={footer_vector02} alt="Footer Vector 2" />
        </div>
        <div className="footer-bottom-shape fb-shape3">
          <img
            src={footer_vector03}
            className="rotateme"
            alt="Footer Vector 3"
          />
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="copyright-text">
                <p>
                  Copyright © {currentYear} <a href="#">MDQ International</a>{" "}
                  All Rights Reserved.
                </p>
              </div>
            </div>
            {/* <div className="col-lg-6 col-md-6 d-none d-md-block">
              <div className="payment-method-list">
                <ul>
                  <li>
                    <a href="#">
                      <img src={visa_2} alt="Visa" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={ae_02} alt="American Express" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={discover} alt="Discover" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={stripe} alt="Stripe" />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
