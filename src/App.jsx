import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace 2000 with your desired loading time
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <header>
            <Navbar />
          </header>
          <main>
            <Slider />
            <About />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
