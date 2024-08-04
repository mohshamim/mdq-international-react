import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      id="sticky-header"
      className="main-header menu-area transparent-header"
    >
      <div className="container-fluid container-full">
        <div className="row">
          <div className="col-12">
            <div className="mobile-nav-toggler">
              <i className="fas fa-bars"></i>
            </div>
            <div className="menu-wrap">
              <div
                className="header-bg"
                data-background="img/bg/header_bg.jpg"
              ></div>
              <nav className="menu-nav show">
                <div className="logo">
                  <Link to="/">
                    <img src="src/assets/logo/mdq-logo.svg" alt="Logo" />
                  </Link>
                  <h4>MDQ International</h4>
                </div>
                <div className="navbar-wrap main-menu d-none d-lg-flex">
                  <ul className="navigation">
                    <li className={currentPath === "/" ? "active" : ""}>
                      <Link to="/">Home</Link>
                    </li>
                    <li className={currentPath === "/about" ? "active" : ""}>
                      <Link to="/about">About</Link>
                    </li>
                    <li className={currentPath === "/shop" ? "active" : ""}>
                      <Link to="/shop">Products</Link>
                    </li>
                    <li className={currentPath === "/contact" ? "active" : ""}>
                      <Link to="/contact">Contacts</Link>
                    </li>
                  </ul>
                </div>
                <div className="header-action d-none d-md-block">
                  <ul>
                    <li className="header-btn">
                      <a href="tel:+91-8447588170" className="btn gradient-btn">
                        Call Us Now
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="mobile-menu">
              <div className="menu-backdrop"></div>
              <div className="close-btn">
                <i className="fas fa-times"></i>
              </div>

              <nav className="menu-box">
                <div className="nav-logo">
                  <Link to="/">
                    <img src="img/logo/w_logo.png" alt="Logo" title="Home" />
                  </Link>
                </div>
                <div className="menu-outer"></div>
                <div className="social-links">
                  <ul className="clearfix">
                    <li>
                      <a href="#" aria-label="Twitter">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Facebook">
                        <span className="fab fa-facebook-square"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Pinterest">
                        <span className="fab fa-pinterest-p"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Instagram">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="YouTube">
                        <span className="fab fa-youtube"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
