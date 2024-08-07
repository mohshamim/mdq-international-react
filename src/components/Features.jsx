import features_icon01 from "../assets/icon/features_icon01.png";
import features_icon02 from "../assets/icon/features_icon02.png";
import features_icon03 from "../assets/icon/features_icon03.png";

const Features = () => {
  return (
    <section className="features-area pt-60 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="features-item features-style-two text-center mb-50">
              <div className="features-icon">
                <img
                  src={features_icon01}
                  alt="Sustainable Farming Practices"
                />
              </div>
              <div className="features-content">
                <h4>
                  <a href="#">Sustainable Farming Practices</a>
                </h4>
                <p>
                  Implementing sustainable farming practices helps in preserving
                  the environment, reducing pollution, and promoting
                  biodiversity.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="features-item features-style-two text-center mb-50">
              <div className="features-icon">
                <img
                  src={features_icon02}
                  alt="Advanced Agricultural Technology"
                />
              </div>
              <div className="features-content">
                <h4>
                  <a href="#">Advanced Agricultural Technology</a>
                </h4>
                <p>
                  Using advanced technology in agriculture, such as drones and
                  sensors, to improve crop yields and monitor soil health.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="features-item features-style-two text-center mb-50">
              <div className="features-icon">
                <img src={features_icon03} alt="Organic Farming Benefits" />
              </div>
              <div className="features-content">
                <h4>
                  <a href="#">Organic Farming Benefits</a>
                </h4>
                <p>
                  Organic farming avoids the use of synthetic chemicals,
                  promoting healthier soil and reducing pollution, which
                  benefits both the environment and consumers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
