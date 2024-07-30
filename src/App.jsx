import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';

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
      {isLoading ? <Preloader /> : (
        <>
          <header>
            <Header />
          </header>
          <main>
            <Slider />
            <About />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
