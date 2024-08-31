import "./App.css";
import React, { useRef } from 'react';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Slider from "./Components/Slider/Slider";
import About from "./Components/About/About";

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Slider/>
      <section id="about" ref={aboutRef}>
        <About/>
      </section>
     
    </div>
  );
}

export default App;
