import contact_icon01 from "../assets/icon/contact_icon01.png";
import contact_icon02 from "../assets/icon/contact_icon02.png";
import contact_icon03 from "../assets/icon/contact_icon03.png";
export default function ContactArea() {
  return (
    <section className="contact-area">
      <div className="contact-info-wrap pt-90 pb-60">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-around">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="contact-info-box mb-30">
                <div className="contact-info-icon">
                  <img src={contact_icon01} alt="Phone Icon" />
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
                  <img src={contact_icon02} alt="Location Icon" />
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
                  <img src={contact_icon03} alt="Mail Icon" />
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
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="First Name *" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Phone No" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Your Email *" />
                    </div>
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                  ></textarea>
                  <button className="btn gradient-btn">Send Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
