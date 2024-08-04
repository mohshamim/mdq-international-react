import rice_ddgs1 from "../assets/images/items/rice-ddgs1.jfif";
import corn_ddgs1 from "../assets/images/items/corn_ddgs1.jfif";
import turmeric_doc1 from "../assets/images/items/turmeric_doc1.jfif";
import corn_gluten1 from "../assets/images/items/corn_gluten1.jfif";
import mustard_doc1 from "../assets/images/items/mustard_doc1.jfif";
import dorb1 from "../assets/images/items/dorb1.jfif";
import mbm1 from "../assets/images/items/mbm1.jfif";
import leather_meal1 from "../assets/images/items/leather_meal1.jfif";

import organic_farm_shape01 from "../assets/images/organic_farm_shape01.png";
import organic_farm_shape02 from "../assets/images/organic_farm_shape02.png";
import organic_farm_shape03 from "../assets/images/organic_farm_shape03.png";
import organic_farm_shape04 from "../assets/images/organic_farm_shape04.png";
import OrganicFarmItem from "./OrganicFarmItem";
const FarmingArea = () => {
  const items = [
    {
      imgSrc: rice_ddgs1,
      imgAlt: "Rice DDGS",
      title: "RICE DDGS",
      description:
        "Rice DDGS is a by-product of ethanol production from rice, used as a feed ingredient.",
    },
    {
      imgSrc: corn_ddgs1,
      imgAlt: "Corn DDGS",
      title: "CORN DDGS",
      description:
        "Corn DDGS is a by-product of ethanol production from corn, used as a feed ingredient.",
    },
    {
      imgSrc: turmeric_doc1,
      imgAlt: "Turmeric DOC",
      title: "TURMERIC DOC",
      description:
        "Turmeric DOC is a by-product of turmeric processing, used as a feed additive.",
    },
    {
      imgSrc: corn_gluten1,
      imgAlt: "Corn Gluten",
      title: "CORN GLUTEN",
      description:
        "Corn Gluten is a high-protein feed ingredient from the corn milling process.",
    },
    {
      imgSrc: mustard_doc1,
      imgAlt: "Mustard DOC",
      title: "MUSTARD DOC",
      description:
        "Mustard DOC is a by-product of mustard oil extraction, used as a feed supplement.",
    },
    {
      imgSrc: dorb1,
      imgAlt: "DORB",
      title: "DORB",
      description:
        "DORB is a by-product of rice bran oil extraction, used as a feed ingredient.",
    },
    {
      imgSrc: mbm1,
      imgAlt: "MBM",
      title: "MBM",
      description:
        "MBM is a high-protein feed ingredient made from rendered animal tissues.",
    },
    {
      imgSrc: leather_meal1,
      imgAlt: "Leather Meal",
      title: "LEATHER MEAL",
      description:
        "Leather Meal is a protein-rich by-product from the leather manufacturing process.",
    },
  ];

  return (
    <section className="farming-area farming-solid-bg pt-120 pb-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              <h6 className="sub-title">Our </h6>
              <h2 className="title">
                <span>Animal Feed </span> And Pet Food Products
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center items-section">
          {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="organic-farm-item organic-farm-style-two">
              <div className="org-frm-img">
                <img src={rice_ddgs1} alt="Fat Free Meat" />
              </div>
              <div className="org-frm-content">
                <h4>
                  <a href="#">RICE DDGS</a>
                </h4>
                <p>
                  Rice DDGS is a co-product of ethanol production using rice as
                  the primary raw material.
                </p>
                <a href="#" className="btn gradient-btn">
                  View More
                </a>
              </div>
            </div>
          </div> */}
          {items.map((item, index) => (
            <OrganicFarmItem
              key={index}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              title={item.title}
              description={item.description}
            />
          ))}
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
