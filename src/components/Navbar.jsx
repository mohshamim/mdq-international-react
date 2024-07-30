export default function Navbar() {
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
                  <a href="index.html">
                    <img src="src/assets/logo.png" alt="Logo" />
                  </a>
                </div>
                <div className="navbar-wrap main-menu d-none d-lg-flex">
                  <ul className="navigation">
                    <li className="active">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li className="dropdown">
                      <a href="shop.html">Products</a>
                    </li>
                    <li>
                      <a href="contact.html">Contacts</a>
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
                  <a href="index.html">
                    <img src="img/logo/w_logo.png" alt="" title="" />
                  </a>
                </div>
                <div className="menu-outer"></div>
                <div className="social-links">
                  <ul className="clearfix">
                    <li>
                      <a href="#">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fab fa-facebook-square"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fab fa-pinterest-p"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
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
