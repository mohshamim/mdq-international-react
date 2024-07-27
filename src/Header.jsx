export default function Header(){
    return(<header>
        <div id="sticky-header" class="main-header menu-area transparent-header">
          <div class="container-fluid container-full">
            <div class="row">
              <div class="col-12">
                <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                <div class="menu-wrap">
                  <div
                    class="header-bg"
                    data-background="img/bg/header_bg.jpg"
                  ></div>
                  <nav class="menu-nav show">
                    <div class="logo">
                      <a href="index.html">
                        <img src="src/assets/logo.png" alt="Logo" />
                      </a>
                    </div>
                    <div class="navbar-wrap main-menu d-none d-lg-flex">
                      <ul class="navigation">
                        <li class="active">
                          <a href="index.html">Home</a>
                        </li>
                        <li><a href="about.html">About</a></li>
        
                        <li class="dropdown">
                          <a href="shop.html">Products</a>
                        </li>
                        <li><a href="contact.html">contacts</a></li>
                      </ul>
                    </div>
                    <div class="header-action d-none d-md-block">
                      <ul>
                        <li class="header-btn">
                          <a href="tel:+91-8447588170" class="btn gradient-btn">
                            Call Us Now</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
        
                <div class="mobile-menu">
                  <div class="menu-backdrop"></div>
                  <div class="close-btn"><i class="fas fa-times"></i></div>
        
                  <nav class="menu-box">
                    <div class="nav-logo">
                      <a href="index.html"
                        ><img src="img/logo/w_logo.png" alt="" title=""
                      /></a>
                    </div>
                    <div class="menu-outer">
                  
                    </div>
                    <div class="social-links">
                      <ul class="clearfix">
                        <li>
                          <a href="#"><span class="fab fa-twitter"></span></a>
                        </li>
                        <li>
                          <a href="#"
                            ><span class="fab fa-facebook-square"></span
                          ></a>
                        </li>
                        <li>
                          <a href="#"><span class="fab fa-pinterest-p"></span></a>
                        </li>
                        <li>
                          <a href="#"><span class="fab fa-instagram"></span></a>
                        </li>
                        <li>
                          <a href="#"><span class="fab fa-youtube"></span></a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
        
              </div>
            </div>
          </div>
        </div>
        </header>
        );
        }
