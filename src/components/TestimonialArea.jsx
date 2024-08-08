import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quoteIcon from "../assets/icon/quote_icon.png";

// Sample testimonials data
const testimonials = [
  {
    name: "Tomad Alexander",
    rating: 5,
    feedback:
      "The quality of the grains we received was exceptional. The consistent quality and timely delivery have greatly enhanced our farming operations. Highly recommended!",
  },
  {
    name: "Likon Xander",
    rating: 5,
    feedback:
      "The feed products provided by MDQ International have significantly improved the health and productivity of our livestock. Excellent service and reliable products.",
  },
  {
    name: "Kumlar Demoon",
    rating: 5,
    feedback:
      "MDQ International offers top-notch agro-products. The corn gluten and mustard DOC have been a game-changer for our crop yields. The support and customer service are outstanding!",
  },
];

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

function TestimonialItem({ name, rating, feedback }) {
  return (
    <div className="testimonial-item mb-30">
      <div className="testimonial-top">
        <div className="icon">
          <img src={quoteIcon} alt="Quote Icon" />
        </div>
        <div className="testi-avatar">
          <h5>{name}</h5>
        </div>
        <div className="testi-rating">
          {[...Array(rating)].map((_, index) => (
            <i className="fas fa-star" key={index}></i>
          ))}
        </div>
      </div>
      <div className="testimonial-content">
        <p>{feedback}</p>
      </div>
    </div>
  );
}

function TestimonialArea() {
  return (
    <section className="testimonial-area testi-bg pt-120 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="section-title text-center mb-70">
              <h6 className="sub-title">Testimonial</h6>
              <h2 className="title">
                <span>Happy</span> Customer Feedback
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <TestimonialItem
                  key={index}
                  name={testimonial.name}
                  rating={testimonial.rating}
                  feedback={testimonial.feedback}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialArea;
