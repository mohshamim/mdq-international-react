import features_icon01 from "../assets/icon/features_icon01.png";
import features_icon02 from "../assets/icon/features_icon02.png";
import features_icon03 from "../assets/icon/features_icon03.png";
const Features = () => {
  return (
    <section className="features-area pt-120 pb-65">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="features-item features-style-two text-center mb-50">
              <div className="features-icon">
                <img src={features_icon01} alt="Best Quality Products" />
              </div>
              <div className="features-content">
                <h4>
                  <a href="#">BEST QUALITY PRODUCTS</a>
                </h4>
                <p>
                  Agriculture was the key development in the rise of sedentary
                  human civilization, whereby farming domesticated species.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="features-item features-style-two text-center mb-50">
              <div className="features-icon">
                <img src={features_icon02} alt="Specifically Farming" />
              </div>
              <div className="features-content">
                <h4>
                  <a href="#">Specifically Farming</a>
                </h4>
                <p>
                  Agriculture was the key development in the rise of sedentary
                  human civilization, whereby farming domesticated species.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="features-item features-style-two text-center mb-50">
              <div className="features-icon">
                <img src={features_icon03} alt="Organic Farm Importance" />
              </div>
              <div className="features-content">
                <h4>
                  <a href="#">Organic Farm Important?</a>
                </h4>
                <p>
                  Agriculture was the key development in the rise of sedentary
                  human civilization, whereby farming domesticated species.
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
