import slider_bottom from "../assets/slider/slider_bottom.png";

function Slider() {
  return (
    <section className="slider-area">
      <div className="slider-active">
        <div className="single-slider slider-bg fix">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="slider-video"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div
            className="slider-content text-center"
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
            }}
          >
            <h2 data-animation="fadeInUp" data-delay=".3s">
              Quality Proteins & Commodities for Animal Feed
            </h2>
            <h6 data-animation="fadeInUp" data-delay=".6s">
              We are a global supplier of the highest quality animal feed.
            </h6>
            <div className="slider-btn">
              <a
                href="#"
                className="btn gradient-btn"
                data-animation="fadeInLeft"
                data-delay=".9s"
              >
                <span>+</span> Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="slider-bottom-bg"
        style={{ backgroundImage: `url(${slider_bottom})` }}
      ></div>
    </section>
  );
}

export default Slider;
