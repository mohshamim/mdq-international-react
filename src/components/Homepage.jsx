import About from "./About";
import FarmingArea from "./FarmingArea";
import Features from "./Features";
import Shop from "./Shop";
import Slider from "./Slider";

function HomePage() {
  return (
    <div>
      <Slider />
      <About />
      <FarmingArea />
      <Features />
    </div>
  );
}

export default HomePage;
