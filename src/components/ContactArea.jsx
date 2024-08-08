import React from "react";
import emailjs from "emailjs-com";

export default function ContactArea() {
  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_b1ceuve",
        "template_i4mt7oe",
        event.target,
        "KMyqG6IbZ7BR4bep9"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          event.target.reset(); // Optionally reset the form
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section className="contact-area">
      <div className="contact-info-wrap pt-90 pb-60">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-around">
            {/* Contact info boxes */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="contact-info-box mb-30">
                <div className="contact-info-icon">
                  <img
                    src="/src/assets/icon/contact_icon01.png"
                    alt="Phone Icon"
                  />
                </div>
                <div className="contact-info-content">
                  <h5>Phone Number</h5>
                  <span>+91 98189 57200</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="contact-info-box mb-30">
                <div className="contact-info-icon">
                  <img
                    src="/src/assets/icon/contact_icon02.png"
                    alt="Location Icon"
                  />
                </div>
                <div className="contact-info-content">
                  <h5>Find Location</h5>
                  <span>
                    216, Samiah Garden City, Hapur, Uttar Pradesh 245101
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="contact-info-box mb-30">
                <div className="contact-info-icon">
                  <img
                    src="/src/assets/icon/contact_icon03.png"
                    alt="Mail Icon"
                  />
                </div>
                <div className="contact-info-content">
                  <h5>Our Mail</h5>
                  <span>mdqinternational01@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-wrap pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-70">
                <h6 className="sub-title">Contact Us</h6>
                <h2 className="title">
                  <span>How</span> Can We Help You?
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="First Name *"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="phone" placeholder="Phone No" />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        required
                      />
                    </div>
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    required
                  ></textarea>
                  <button type="submit" className="btn gradient-btn">
                    Send Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
