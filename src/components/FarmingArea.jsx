import org_frm_img01 from "../assets/images/org_frm_img01.png";
import org_frm_img02 from "../assets/images/org_frm_img02.png";
import org_frm_img03 from "../assets/images/org_frm_img03.png";
import org_frm_img04 from "../assets/images/org_frm_img04.png";
import organic_farm_shape01 from "../assets/images/organic_farm_shape01.png";
import organic_farm_shape02 from "../assets/images/organic_farm_shape02.png";
import organic_farm_shape03 from "../assets/images/organic_farm_shape03.png";
import organic_farm_shape04 from "../assets/images/organic_farm_shape04.png";
const FarmingArea = () => {
  return (
    <section className="farming-area farming-solid-bg pt-120 pb-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              <h6 className="sub-title">WHAT WE DO</h6>
              <h2 className="title">
                <span>Welcome to</span> Organic Farming
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="organic-farm-item organic-farm-style-two">
              <div className="org-frm-img">
                <img src={org_frm_img01} alt="Fat Free Meat" />
              </div>
              <div className="org-frm-content">
                <h4>
                  <a href="#">Fat Free Meat</a>
                </h4>
                <p>
                  Agricultural mean crops, livestock, and livestock products.
                </p>
                <a href="#" className="btn gradient-btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="organic-farm-item organic-farm-style-two">
              <div className="org-frm-img">
                <img src={org_frm_img02} alt="Fresh Vegetables" />
              </div>
              <div className="org-frm-content">
                <h4>
                  <a href="#">Fresh Vegetables</a>
                </h4>
                <p>
                  Agricultural mean crops, livestock, and livestock products.
                </p>
                <a href="#" className="btn gradient-btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="organic-farm-item organic-farm-style-two">
              <div className="org-frm-img">
                <img src={org_frm_img03} alt="Organic Fruits" />
              </div>
              <div className="org-frm-content">
                <h4>
                  <a href="#">Organic Fruits</a>
                </h4>
                <p>
                  Agricultural mean crops, livestock, and livestock products.
                </p>
                <a href="#" className="btn gradient-btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="organic-farm-item organic-farm-style-two">
              <div className="org-frm-img">
                <img src={org_frm_img04} alt="Fresh Salad" />
              </div>
              <div className="org-frm-content">
                <h4>
                  <a href="#">Fresh Salad</a>
                </h4>
                <p>
                  Agricultural mean crops, livestock, and livestock products.
                </p>
                <a href="#" className="btn gradient-btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="org-frm-shape">
        <img
          src={organic_farm_shape01}
          alt=""
          className="paroller"
          data-paroller-factor="0.20"
          data-paroller-factor-lg="0.20"
          data-paroller-factor-md="0.20"
          data-paroller-factor-sm="0.20"
          data-paroller-type="foreground"
          data-paroller-direction="vertical"
        />
      </div>
      <div className="org-frm-shape org-frm-shape2">
        <img
          src={organic_farm_shape02}
          alt=""
          className="paroller"
          data-paroller-factor="0.15"
          data-paroller-factor-lg="0.15"
          data-paroller-factor-md="0.15"
          data-paroller-factor-sm="0.15"
          data-paroller-type="foreground"
          data-paroller-direction="vertical"
        />
      </div>
      <div className="org-frm-shape org-frm-shape3">
        <img
          src={organic_farm_shape03}
          alt=""
          className="paroller"
          data-paroller-factor="0.20"
          data-paroller-factor-lg="0.20"
          data-paroller-factor-md="0.20"
          data-paroller-factor-sm="0.20"
          data-paroller-type="foreground"
          data-paroller-direction="vertical"
        />
      </div>
      <div className="org-frm-shape org-frm-shape4">
        <img
          src={organic_farm_shape04}
          alt=""
          className="paroller"
          data-paroller-factor="0.15"
          data-paroller-factor-lg="0.15"
          data-paroller-factor-md="0.15"
          data-paroller-factor-sm="0.15"
          data-paroller-type="foreground"
          data-paroller-direction="vertical"
        />
      </div>
    </section>
  );
};

export default FarmingArea;
