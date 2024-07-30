import PropTypes from "prop-types";
import breadcrumb_bg02 from "../assets/bg/breadcrumb_bg02.jpg";

export default function Breadcrumb({ title }) {
  return (
    <section
      className="breadcrumb-area breadcrumb-bg"
      style={{ backgroundImage: `url(${breadcrumb_bg02})` }} // Use backticks for template literals
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2>{title}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
};
