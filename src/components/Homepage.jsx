import About from "./About";
import FarmingArea from "./FarmingArea";
import Features from "./Features";
import Shop from "./Shop";
import Slider from "./Slider";

function HomePage() {
  return (
    <div>
      <Slider />
      <Features />
      <About />
      <FarmingArea />
      <Shop />
    </div>
  );
}

export default HomePage;
