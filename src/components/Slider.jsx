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
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
            }}
          >
            <h2 data-animation="fadeInUp" data-delay=".3s">
              Organic and Natural
            </h2>
            <h6 data-animation="fadeInUp" data-delay=".6s">
              Agriculture is the science and art of cultivating plants and
              livestock
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
              <a
                href="#"
                className="btn transparent-btn"
                data-animation="fadeInRight"
                data-delay=".9s"
              >
                Shop Now
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
