import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../../assets/asset 5.png';
import image2 from '../../assets/asset 6.png';
import image3 from '../../assets/asset 7.jpeg';
import image4 from '../../assets/asset 8.jpeg';

export default function SliderMain() {
  const images = [image1, image2, image3, image4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="slider-item">
          <img src={image} alt='Image ' className="w-full h-full object-cover" />
        </div>
      ))}
    </Slider>
  );
}
