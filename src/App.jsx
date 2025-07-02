import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import FarmingArea from "./components/FarmingArea";
import HomePage from "./components/Homepage";
import Breadcrumb from "./components/Breadcrumb";
import ContactArea from "./components/ContactArea";
import ItemDetail from "./components/ItemDetail";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

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
            <WhatsAppWidget
              phoneNumber="+919818957200"
              companyName="MDQ International"
              message="Hello! How can we help you?"
            />
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
                    <Breadcrumb title="Products" />
                    <FarmingArea />
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
              <Route
                path="/product/:title"
                element={
                  <>
                    <Breadcrumb title="Our Farm Shop" />
                    <ItemDetail />
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
