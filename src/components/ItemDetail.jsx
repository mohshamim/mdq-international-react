import React from "react";
import { useParams } from "react-router-dom";
import rice_ddgs4 from "../assets/images/items/rice-ddgs4.jfif";
import corn_ddgs2 from "../assets/images/items/corn_ddgs2.jfif";
import turmeric_doc2 from "../assets/images/items/turmeric_doc2.jfif";
import corn_gluten2 from "../assets/images/items/corn_gluten2.jfif";
import mustard_doc2 from "../assets/images/items/dorb2.jfif";
import dorb2 from "../assets/images/items/mustard_doc2.jfif";
import leather_meal2 from "../assets/images/items/leather_meal2.jfif";
import mbm2 from "../assets/images/items/mbm2.jfif";

function ItemDetail() {
  const { title } = useParams();
  const products = [
    {
      id: 1,
      title: "RICE DDGS",
      imgSrc: rice_ddgs4,
      imgAlt: "Rice DDGS Image",
      description:
        "MDQ is a prominent Rice DDGS supplier in India. Rice DDGS or Dried Distillers Grains with Solubles are the best alternative protein in the cattle, aqua, and poultry feed industry. Rice DDGS is a by-product of ethanol production in a distillery in which rice is used as a raw material. During alcohol formation, starch is fermented to produce ethyl alcohol. The residual component of grain is a protein that results in DDGS.",
      specifications: `
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
        </tbody>`,
      details: `Rice DDGS can also be an ingredient for poultry diets but one can't go overboard. A reserved amount of 5-8% would result in excellent meat and egg quality. A conservative value of 3% is strongly recommended in aqua feed diet to significantly reduce the cost of feed production without any effect on the quality of feed.
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
        </ul>`,
    },
    {
      id: 2,
      title: "CORN DDGS",
      imgSrc: corn_ddgs2, // Add the image source here
      imgAlt: "CORN DDGS Image",
      description:
        "Corn DDGS is a co-product of ethanol production plants that use corn for manufacturing. Corn Dried Distillers Grains with Soluble (DDGS) is one of the popular, affordable, and suitable alternative food ingredients for the cattle and poultry diet. It is enriched with high protein, and lysine content and has high energy. Corn DDGS has a high rate of digestibility which makes it an ideal substitute for traditional feedsources such as soybean meal, corn, and rapeseed meal among others.",
      specifications: `
        <thead>
          <tr>
            <th scope="col">PARAMETERS</th>
            <th scope="col">35% PROFAT</th>
            <th scope="col">40% PROFAT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Protein</td>
            <td>25-28%</td>
            <td>32-35%</td>
          </tr>
          <tr>
            <td>Moisture</td>
            <td>Less than 12%</td>
            <td>Less than 12%</td>
          </tr>
          <tr>
            <td>Fiber</td>
            <td>4-7%</td>
            <td>4-7%</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>8-12%</td>
            <td>5-8%</td>
          </tr>
          <tr>
            <td>Phosphorus</td>
            <td>Less than 1%</td>
            <td>Less than 1%</td>
          </tr>
          <tr>
            <td>Energy</td>
            <td>3500kcal/kg</td>
            <td>3500kcal/kg</td>
          </tr>
        </tbody>`,
      details: `MDQ INTERNATIONAL is one of the prominent Turmeric DOC SUPPLIER in India. This type of feed supplement is widely utilized in varied concentrations. Curcumin is one of the important ingredients in turmeric. It is a key ingredient that provides turmeric antibacterial, antiviral and anti-inflammatory properties. These factors play an important part in strengthening hen immunity.`,
    },
    {
      id: 3,
      title: "TURMERIC DOC",
      imgSrc: turmeric_doc2, // Add the image source here
      imgAlt: "TURMERIC DOC Image",
      description:
        "We are reliable Turmeric DOC Exporters in India, who offer a wide range of protein supplements for cattle, fish, and other farm animals. We provide the best quality Turmeric DOC at competitive prices to meet the requirements of our valued clients.",
      specifications: `
        <thead>
          <tr>
            <th scope="col">PARAMETERS</th>
            <th scope="col">52% Min</th>
            <th scope="col">55% Min</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Protein</td>
            <td>52-53%</td>
            <td>55-56%</td>
          </tr>
          <tr>
            <td>Moisture</td>
            <td>6-8%</td>
            <td>6-8%</td>
          </tr>
          <tr>
            <td>Fiber</td>
            <td>7-9%</td>
            <td>7-9%</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>4-5%</td>
            <td>4-5%</td>
          </tr>
          <tr>
            <td>Sand Silica</td>
            <td>1-1.5%</td>
            <td>1-1.5%</td>
          </tr>
          <tr>
            <td>Trypsin Inhibitor</td>
            <td>Less than 1</td>
            <td>Less than 1</td>
          </tr>
        </tbody>`,
      details: `Turmeric DOC has the potential to regulate and limit the development and colonization of various pathogenic and non-pathogenic bacteria in the gut of chickens, leading to a balanced gut microbial environment and improved feed consumption as measured by live body weight and weight increase. We have a team of professionals who hold wide years of experience in this field and hence are able to satisfy the needs of the client in an effective manner.
        <ul className="p-0">
          <li className="py-1">
            <span className="arrow">&#8594;</span> Anti-inflammatory effects
          </li>
          <li className="py-1">
            <span className="arrow">&#8594;</span> Antibacterial, antiviral, and anti-fungal benefits
          </li>
          <li className="py-1">
            <span className="arrow">&#8594;</span> Promoting heart and liver health
          </li>
          <li className="py-1">
            <span className="arrow">&#8594;</span> Promoting digestive health
          </li>
          <li className="py-1">
            <span className="arrow">&#8594;</span> Antioxidant properties, which may help prevent certain cancers
          </li>
          <li className="py-1">
            <span className="arrow">&#8594;</span> Preventing cataracts
          </li>
          <li className="py-1">
            <span className="arrow">&#8594;</span> Treatment for allergies, epilepsy, and liver disease
          </li>
          <li className="py-1">
            <span className="arrow">&#8594;</span> Improves the color of the feed
          </li>
          <li className="py-1">
            <span className="arrow">&#8594;</span> Offer anti-bacterial, antifungal, and antiviral benefits
          </li>
          <li className="py-1">
            <span className="arrow">&#8594;</span> Improve liver and heart health
          </li>
          <li className="py-1">
            <span className="arrow">&#8594;</span> Promote digestive health
          </li>
          <li className="py-1">
            <span className="arrow">&#8594;</span> Its antioxidant benefits prevent certain cancers
          </li>
          <li className="py-1">
            <span className="arrow">&#8594;</span> Helps to treat allergies and liver problems
          </li>
        </ul>`,
    },
    {
      id: 4,
      title: "CORN GLUTEN",
      imgSrc: corn_gluten2, // Add the image source here
      imgAlt: "CORN GLUTEN MEAL Image",
      description: `This meal contains insoluble proteins with less quantity of fiber and starch fractions. It is used due to its high protein content, pigments, rich nutrient density, and high energy. Corn gluten meal is an efficient digestive product having high energy value and thus utilized as a poultry meal for broilers, laying hens, chickens, etc.
    
    The conventional diet used in livestock is corn (Energy) and soybean meal (Protein), but the ever- increasing cost of conventional feedstuffs for livestock and poultry has led to an increase in the cost of production. Therefore the industry needed new-age products with reliable data on their nutrient composition, feeding value, and effective level of inclusion. The high energy and good digestible protein in Rice DDGS makes it an ideal protein alternative to partially replace the expensive traditional raw materials in poultry, cattle, and aqua feed industry.`,
      specifications: `
        <thead>
          <tr>
            <th scope="col">PARAMETERS</th>
            <th scope="col">35% PROFAT</th>
            <th scope="col">40% PROFAT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Protein</td>
            <td>25-28%</td>
            <td>32-35%</td>
          </tr>
          <tr>
            <td>Moisture</td>
            <td>Less than 12%</td>
            <td>Less than 12%</td>
          </tr>
          <tr>
            <td>Fiber</td>
            <td>4-7%</td>
            <td>4-7%</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>8-12%</td>
            <td>5-8%</td>
          </tr>
          <tr>
            <td>Phosphorus</td>
            <td>Less than 1%</td>
            <td>Less than 1%</td>
          </tr>
          <tr>
            <td>Energy</td>
            <td>3500kcal/kg</td>
            <td>3500kcal/kg</td>
          </tr>
        </tbody>`,
      details: "",
    },
    {
      id: 5,
      title: "MUSTARD DOC",
      imgSrc: mustard_doc2, // Add the image source here
      imgAlt: "RAPESEED MEAL/MUSTARD DOC Image",
      description: `For livestock diets, rapeseed meal contains a high level of protein and is highly digestible. It has a better amino acid balance than other plant meals like soybean meal and groundnut meal. We export to many countries.
    
    Due to the development of organic farming and on-farm oil production, oil-rich rapeseed meals obtained by mechanical pressure have gained popularity since the turn of the century.`,
      specifications: `
        <thead>
          <tr>
            <th scope="col">PARAMETERS</th>
            <th scope="col">Rapeseed Meal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Protein %</td>
            <td>36-38</td>
          </tr>
          <tr>
            <td>Moisture % (Max)</td>
            <td>8-11</td>
          </tr>
          <tr>
            <td>Fat %</td>
            <td>0-1</td>
          </tr>
          <tr>
            <td>Fibre %</td>
            <td>8-10</td>
          </tr>
          <tr>
            <td>Sand Silica % (Max)</td>
            <td>2</td>
          </tr>
          <tr>
            <td>M Energy (KCal / KG)</td>
            <td>2400-2600</td>
          </tr>
          <tr>
            <td>Pepsin Digestibility</td>
            <td>75-80</td>
          </tr>
          <tr>
            <td>KOH Solubility</td>
            <td>76</td>
          </tr>
          <tr>
            <td>TDN %</td>
            <td>85</td>
          </tr>
          <tr>
            <td>UDP %</td>
            <td>56</td>
          </tr>
        </tbody>`,
      details: "",
    },
    {
      id: 6,
      title: "DORB",
      imgSrc: dorb2, // Add the image source here
      imgAlt: "DE-OILED RICE BRAN Image",
      description: `De-oiled rice bran (DORB) is obtained after oil is removed from the rice bran. This is the commonly used ingredient in the feeding of Indian major carps due to its cheaper cost. DORB is used as a feed ingredient in cattle, poultry, and fish diet. Along with this, they are also used in making fiber-rich biscuits and extraction of an antioxidant compound like oryzanol and other industrial uses.
    
    DORB is widely utilized in the manufacture of cattle feed, poultry feed, fish feed, boiler fuel, sodium silicate, silica gel, insulating bricks, and other products (using wholly burnt white ash of the rice husk).`,
      specifications: `
        <thead>
          <tr>
            <th scope="col">PARAMETERS</th>
            <th scope="col">Value in % Avg</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dry matter</td>
            <td>89.00 % as fed</td>
          </tr>
          <tr>
            <td>Crude Protein</td>
            <td>38.1 % DM</td>
          </tr>
          <tr>
            <td>Crude fiber</td>
            <td>14.3 % DM</td>
          </tr>
          <tr>
            <td>Neutral Detergent Fiber</td>
            <td>31.6 % DM</td>
          </tr>
          <tr>
            <td>Acid Detergent Fiber</td>
            <td>20.7 % DM</td>
          </tr>
          <tr>
            <td>Lignin</td>
            <td>9.7 % DM</td>
          </tr>
          <tr>
            <td>Ether extract</td>
            <td>2.4 % DM</td>
          </tr>
          <tr>
            <td>Ash</td>
            <td>7.6 % DM</td>
          </tr>
          <tr>
            <td>Insoluble ash</td>
            <td>0.3 % DM</td>
          </tr>
          <tr>
            <td>Starch (polarimetry)</td>
            <td>6.3 % DM</td>
          </tr>
          <tr>
            <td>Starch (enzymatic)</td>
            <td>1.6 % DM</td>
          </tr>
          <tr>
            <td>Total sugars</td>
            <td>10.5 % DM</td>
          </tr>
          <tr>
            <td>Gross energy</td>
            <td>19.3 Mj/kg DM</td>
          </tr>
        </tbody>`,
      details: `Benefits of DE OILED RICE BRAN:
    
    - De-oiled Rice Bran (DORB) is derived when crude oil is extracted from rice bran.
    - DORB is commonly used in the production of animal nutrition products catering to cattle, poultry, horse, pet care, aquaculture (aquafeed), and swine industries.
    - Is high in vitamin B and goes well for agricultural animals.
    - Has a noticeable softening action on animal body fat and the butterfat content in milk.
    - The absence of gluten and other allergic substances makes it an excellent feed for sensitive species and certain animal groups.
    
    DORB is an ideal ingredient for use in the manufacture of:
    - Cattle Feed
    - Fish Feed
    - Dog Feed
    - Chicken Feed
    - Horse Feed
    - Pig Feed & Boiler Fuel`,
    },
    {
      id: 7,
      title: "MBM",
      imgSrc: mbm2, // Add the image source here
      imgAlt: "MEAT BONE MEAL Image",
      description: `Meat and bone meal is an excellent source of protein. On poultry diets, meat and bone meal is typically limited to less than 5% of the diet content.`,
      specifications: `
        <thead>
          <tr>
            <th scope="col">PARAMETERS</th>
            <th scope="col">VALUE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Protein</td>
            <td>45% min</td>
          </tr>
          <tr>
            <td>Ash</td>
            <td>36% max</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>12% max</td>
          </tr>
          <tr>
            <td>Moisture</td>
            <td>8% max</td>
          </tr>
          <tr>
            <td>Fiber</td>
            <td>3% max</td>
          </tr>
          <tr>
            <td>Calcium</td>
            <td>10% max</td>
          </tr>
          <tr>
            <td>Phosphorous</td>
            <td>5% min</td>
          </tr>
          <tr>
            <td>Antioxidant</td>
            <td>200 PPM min</td>
          </tr>
          <tr>
            <td>Protein digestibility</td>
            <td>85% min em 0.2% Pepsina</td>
          </tr>
        </tbody>`,
      details: "",
    },
    {
      id: 8,
      title: "LEATHER MEAL",
      imgSrc: leather_meal2, // Add the image source here
      imgAlt: "LEATHER MEAL Image",
      description: `Leather meal has to be considered as a hardly suitable feedstuff in diets for aquatic animals. Its high protein content and its use in small quantities make it a potential addition in aquatic feed for less demanding species. The hydrolyzed leather meal can be used as the source of protein in animal feed for livestock and fowl.`,
      specifications: "",
      details: "",
    },
  ];

  const product = products.find((product) => product.title === title);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section
      className="about-us-area pt-60 pb-60"
      style={{ backgroundImage: "url(img/bg/faq_bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 aos-init aos-animate item-detail-heading">
            <div className="section-title mb-50 d-flex justify-content-center align-items-center gap-2">
              <h2 className="title">
                <span>{product.title}</span>
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
                  <p>{product.description}</p>
                </div>
              </div>
              <div className="col-lg-4 custom-about-us-image">
                <div className="about-us-image">
                  <img
                    src={product.imgSrc}
                    alt={product.imgAlt}
                    className="img-fluid"
                  />
                </div>
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
                dangerouslySetInnerHTML={{ __html: product.specifications }}
              />
            </div>
          </div>

          <div className="row justify-content-center mt-60">
            <div className="col-lg-12">
              <div
                className="about-us-content"
                dangerouslySetInnerHTML={{ __html: product.details }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
