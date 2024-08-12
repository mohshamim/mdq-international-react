import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function OrganicFarmItem({ imgSrc, imgAlt, title, description }) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4 custom-organic-farm-item">
      <div className="organic-farm-item organic-farm-style-two">
        <div className="org-frm-img custom-org-frm-img ">
          <img src={imgSrc} alt={imgAlt} className="img-fluid" />
        </div>
        <div className="org-frm-content p-3">
          <h4 className="mb-2">
            <Link to={`/product/${title}`} className="text-decoration-none">
              {title}
            </Link>
          </h4>
          <p className="mb-3">{description}</p>
          <Link to={`/product/${title}`} className="btn gradient-btn">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}

OrganicFarmItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default OrganicFarmItem;
