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
      <div className="container mt-60">
        <div className="row">
          <div
            className="col-lg-12 aos-init aos-animate item-detail-heading"
            data-aos="fade-down"
          >
            <div className="section-title mb-50 d-flex justify-content-center align-items-center gap-2">
              <h2 className="title">
                <span>Product Specifications</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-1"></div>

          <div className="col-lg-10 d-flex justify-content-center spec-table">
            <table
              className="table table-striped aos-init aos-animate"
              data-aos="fade-down"
            >
              <thead>
                <tr>
                  <th scope="col">PARAMETERS</th>
                  <th scope="col">HIPRO 45%</th>
                  <th scope="col">HIPRO 50%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Protein</td>
                  <td>45%</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>Moisture</td>
                  <td>8-12%</td>
                  <td>8-12%</td>
                </tr>
                <tr>
                  <td>Fiber</td>
                  <td>3-5%</td>
                  <td>3-5%</td>
                </tr>
                <tr>
                  <td>Fat</td>
                  <td>1-2%</td>
                  <td>1-2%</td>
                </tr>
                <tr>
                  <td>Sand Silica</td>
                  <td>Max 1%</td>
                  <td>Max 1%</td>
                </tr>
                <tr>
                  <td>Energy</td>
                  <td>3000kcal/kg</td>
                  <td>3000kcal/kg</td>
                </tr>
                <tr>
                  <td>Appearance</td>
                  <td>Light Brown</td>
                  <td>Light Brown</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div className="row justify-content-center mt-60">
          <div className="col-lg-12">
            <div className="row align-items-center">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <div className="about-us-content">
                  <p>
                    Rice DDGS can also be an ingredient for poultry diets but
                    one can't go overboard. A reserved amount of 5-8% would
                    result in excellent meat and egg quality. A conservative
                    value of 3% is strongly recommended in aqua feed diet to
                    significantly reduce the cost of feed production without any
                    effect on the quality of feed :
                  </p>
                  <ul className="p-0">
                    <li className="py-1">
                      <span className="arrow">&#8594;</span> Well-accepted
                      product in the Indian feed industry
                    </li>
                    <li className="py-1">
                      <span className="arrow">&#8594;</span> Excellent energy
                      source
                    </li>
                    <li className="py-1">
                      <span className="arrow">&#8594;</span> The favorable amino
                      acid profile
                    </li>
                    <li className="py-1">
                      <span className="arrow">&#8594;</span> High Protein
                      Content
                    </li>
                    <li className="py-1">
                      <span className="arrow">&#8594;</span> Low, fibre content
                      of 2-3%
                    </li>
                  </ul>
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
