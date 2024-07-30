import React from 'react';

function About() {
  return (
    <section className="about-us-area pt-120 pb-120" data-background="img/bg/faq_bg.jpg" style={{ backgroundImage: 'url(img/bg/faq_bg.jpg)' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-image">
              <img src="img/images/faq_img.jpg" alt="About Us Image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-content">
              <div className="section-title mb-50">
                <h6 className="sub-title">About MDQ International</h6>
                <h2 className="title"><span>About</span> Us</h2>
              </div>
              <p>
                Welcome to MDQ International, a pioneering leader in the
                supply of high-quality alternative protein products for animal
                feeds across India and globally. Founded in 2010, we have
                established ourselves as a trusted manufacturer and supplier,
                offering a comprehensive range of feed raw materials essential
                for the health and growth of livestock.
              </p>
              <p>
                Our mission is to innovate and provide sustainable feed
                solutions that enhance the nutritional value of animal feed
                while minimizing environmental impact. We are dedicated to
                excellence, consistently striving to exceed our clients'
                expectations through rigorous quality control and ongoing
                research and development.
              </p>
              <p>
                With a strong commitment to sustainability, we are at the
                forefront of developing eco-friendly products that support the
                agricultural industry. Our experienced team of professionals
                works closely with farmers and industry partners to ensure
                that our products meet the highest standards of quality and
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
                  <i className="fas fa-check"></i> Comprehensive range of feed raw
                  materials
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
              <a href="#" className="btn gradient-btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
