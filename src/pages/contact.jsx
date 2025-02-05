
import pic from "../images/beach.jpg"
import pic2 from "../images/building.jpg"
import '../style/contact.css';

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Contact = () => {
  const images = [
    { src:pic, text: 'Image 1' },
    { src: pic, text: 'Image 2' },
    { src: pic, text: 'Image 3' },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Shows three images at a time
    slidesToScroll: 1,
    centerMode: true, // Centers the active slide
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.src} alt={`Slide ${index}`} className="slide-image" />
            <div className="text">{image.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next and Prev buttons
const NextArrow = (props) => {
  const { onClick } = props;
  return <div className="nextArrow" onClick={onClick}>&#10095;</div>;
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return <div className="prevArrow" onClick={onClick}>&#10094;</div>;
};

export default Contact;
