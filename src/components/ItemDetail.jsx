import rice_ddgs4 from "../assets/images/items/rice-ddgs4.jfif";
function ItemDetail() {
  return (
    <section
      className="about-us-area pt-60 pb-60"
      data-background="img/bg/faq_bg.jpg"
      style={{ backgroundImage: "url(img/bg/faq_bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 aos-init aos-animate item-detail-heading"
            data-aos="fade-down"
          >
            <div className="section-title mb-50 d-flex justify-content-center align-items-center gap-2">
              <h2 className="title">
                <span>Rice DDGS</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="row align-items-center">
              <div className="col-lg-2"></div>
              <div className="col-lg-6">
                <div className="about-us-content">
                  <p>
                    MDQ is a prominent Rice DDGS supplier in India. Rice DDGS or
                    Dried Distillers Grains with Solubles are the best
                    alternative protein in the cattle, aqua, and poultry feed
                    industry. Rice DDGS is a by-product of ethanol production in
                    a distillery in which rice is used as a raw material. During
                    alcohol formation, starch is fermented to produce ethyl
                    alcohol. The residual component of grain is a protein that
                    results in DDGS.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 custom-about-us-image">
                <div className="about-us-image">
                  <img
                    src={rice_ddgs4}
                    alt="About Us Image"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
