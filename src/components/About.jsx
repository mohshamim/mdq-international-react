import faq_img from "../assets/images/faq_img.jpg";
function About() {
  return (
    <section
      className="about-us-area pt-120 pb-120"
      data-background="img/bg/faq_bg.jpg"
      style={{ backgroundImage: "url(img/bg/faq_bg.jpg)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-image">
              <img src={faq_img} alt="About Us Image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-content">
              <div className="section-title mb-50">
                <h6 className="sub-title">About MDQ International</h6>
                <h2 className="title">
                  <span>About</span> Us
                </h2>
              </div>
              <p>
                Welcome to MDQ International, a leading supplier of high-quality
                alternative protein products for animal feeds in India and
                globally. Established in 2010, we are a trusted manufacturer
                offering a wide range of feed raw materials essential for
                livestock health and growth. Our mission is to provide
                innovative and sustainable feed solutions that enhance the
                nutritional value of animal feed while minimizing environmental
                impact.
              </p>
              <p>
                We are committed to excellence, with rigorous quality control
                and continuous research and development. Dedicated to
                sustainability, we develop eco-friendly products that support
                the agricultural industry. Our experienced team collaborates
                closely with farmers and industry partners to ensure our
                products meet the highest standards of quality and
                effectiveness.
              </p>

              <ul className="about-list">
                <li>
                  <i className="fas fa-check"></i> Trusted manufacturer and
                  supplier since 2010
                </li>
                <li>
                  <i className="fas fa-check"></i> High-quality alternative
                  protein products
                </li>
                <li>
                  <i className="fas fa-check"></i> Comprehensive range of feed
                  raw materials
                </li>
                <li>
                  <i className="fas fa-check"></i> Commitment to sustainability
                  and innovation
                </li>
                <li>
                  <i className="fas fa-check"></i> Strong partnerships with
                  farmers and industry experts
                </li>
              </ul>
              <a href="#" className="btn gradient-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
