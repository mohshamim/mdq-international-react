import About from "./About";
import FarmingArea from "./FarmingArea";
import Features from "./Features";
import Slider from "./Slider";
import TestimonialArea from "./TestimonialArea";

function HomePage() {
  return (
    <div>
      <Slider />
      <About />
      <FarmingArea />
      <Features />
      <TestimonialArea />
    </div>
  );
}

export default HomePage;
