import w_logo from "../assets/logo/w_logo.png";
import footer_vector01 from "../assets/images/footer_vector01.png";
import footer_vector02 from "../assets/images/footer_vector02.png";
import footer_vector03 from "../assets/images/footer_vector03.png";
import ae_02 from "../assets/icon/ae_02.png";
import discover from "../assets/icon/discover.png";
import stripe from "../assets/icon/stripe.png";
import visa_2 from "../assets/icon/visa_2.png";
import f_blog_thumb01 from "../assets/blog/f_blog_thumb01.jpg";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div
        className="footer-top footer-bg fix"
        data-background="../assets/bg/footer_bg.jpg"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget mb-50">
                <div className="footer-logo mb-35">
                  <a href="index.html">
                    <img src={w_logo} alt="Logo" />
                  </a>
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
                        <span>Address: </span>PO Box W75 Street lan West new
                        queens
                      </li>
                      <li>
                        <i className="fas fa-headphones"></i>
                        <span>Phone: </span>+24 1245 654 235
                      </li>
                      <li>
                        <i className="fas fa-envelope-open"></i>
                        <span>Email: </span>info@exemple.com
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
                      <a href="#">Hydroponic (26)</a>
                    </li>
                    <li>
                      <a href="#">Agriculture (11)</a>
                    </li>
                    <li>
                      <a href="#">Foods (9)</a>
                    </li>
                    <li>
                      <a href="#">Milking (3)</a>
                    </li>
                    <li>
                      <a href="#">Nutrition (3)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="footer-widget mb-50">
                <div className="fw-title mb-35">
                  <h5>Need Help?</h5>
                </div>
                <div className="footer-blog-post">
                  <ul>
                    <li>
                      <div className="f-blog-post-thumb">
                        <a href="#">
                          <img src={f_blog_thumb01} alt="Blog Thumbnail 1" />
                        </a>
                      </div>
                      <div className="f-blog-post-content">
                        <h5>
                          <a href="#">
                            Agriculture is the science and art of cultivating
                          </a>
                        </h5>
                        <span>Tonoy Pueyo</span>
                      </div>
                    </li>
                    <li>
                      <div className="f-blog-post-thumb">
                        <a href="#">
                          <img src={f_blog_thumb01} alt="Blog Thumbnail 2" />
                        </a>
                      </div>
                      <div className="f-blog-post-content">
                        <h5>
                          <a href="#">Whereby farming doated species create</a>
                        </h5>
                        <span>Mark Wiens</span>
                      </div>
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
            <div className="col-lg-6 col-md-6 d-none d-md-block">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
