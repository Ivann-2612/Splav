import React from 'react';
import './App.css';
import "./index.css";
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import Slider from "./components/Slider.js";
import MainTwo from './components/MainTwo.js';
import Footer from './components/Footer.js';
import Logo from './images/river.png';
import Loader from 'react-loader-spinner';

function App() {
  return (
    <div className="App">
      <Loader className="loader" 
      type={"Puff"}
      color={"#e1f7d5"}
      height={320}
      width={500}
      timeout={4000}
            />
      <Navbar />
        <img src={Logo} alt="River boat" />
      <Main />
      <Slider />      
      <MainTwo />
      <Footer />
    </div>
  );
}

export default App;
