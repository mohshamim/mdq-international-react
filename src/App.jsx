import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Features from "./components/Features";
import FarmingArea from "./components/FarmingArea";
import Shop from "./components/Shop";
import HomePage from "./components/Homepage";
import Breadcrumb from "./components/Breadcrumb";
import ContactArea from "./components/ContactArea";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace 2000 with your desired loading time
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/about"
                element={
                  <>
                    <Breadcrumb title="About Us" />
                    <About />
                  </>
                }
              />
              <Route
                path="/shop"
                element={
                  <>
                    <Breadcrumb title="Our Farm Shop" />
                    <Shop />
                  </>
                }
              />
              <Route
                path="/contact"
                element={
                  <>
                    <Breadcrumb title="Contact Us" />
                    <ContactArea />
                  </>
                }
              />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
