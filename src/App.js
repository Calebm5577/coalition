import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import img1 from './image/psd1.PNG'
import img2 from './image/psd2.PNG'
import img3 from './image/psd3.PNG'

function App() {
  return (
    <div className="App">
      <Carousel >
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
        <img src={img2} />
        </div>
      </Carousel>
    </div>
  );
}

export default App;
