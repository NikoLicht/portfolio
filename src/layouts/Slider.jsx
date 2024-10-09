import React from 'react';
import './Slider.css';

const Slider = ({ images}) => {
  return (
    <div className="slider">
         {images.map((imageSrc, index) => (
             <img key={index} src={imageSrc} alt={`Slide ${index}`} className="slide" />
         ))}

    </div>
  );
};

export default Slider;