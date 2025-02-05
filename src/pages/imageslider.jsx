import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button onClick={goToPrevSlide}>&#10094;</button> {/* Left arrow */}
      <div className="slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button onClick={goToNextSlide}>&#10095;</button> {/* Right arrow */}
    </div>
  );
};

export default ImageSlider;
