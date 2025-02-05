
import "../style/slide.css";
import jibin from '../images/rooms/room1.jpeg' 
import React, { useEffect, useRef } from 'react';


const Slide = () => {
  const slidesContainerRef = useRef(null);

  // Function to duplicate slides
  const duplicateSlides = () => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      slidesContainerRef.current.appendChild(clone);
    });
  };

  // Run the duplication logic after the component mounts
  useEffect(() => {
    duplicateSlides();
  }, []);

  return (
    <div className="container">
      <div className="heading">
        <h1>highlights</h1>
      </div>
      <div className="slider">
        <div className="slides" ref={slidesContainerRef}>
          <div className="slide slide-one">
            <img className="first-img" src={jibin} alt="" />
            <div className="box one">
              <h1>heading</h1>
              <p>Lorem, ipsum dolor.lorem4fafofnf</p>
            </div>
          </div>
          <div className="slide slide-one">
            <img className="first-img" src={jibin} alt="" />
            <div className="box one">
            <h1>heading</h1>
            <p>Lorem, ipsum dolor.lorem4fafofnf</p>
            </div>
          </div>
          <div className="slide slide-one">
            <img className="first-img" src={jibin} alt="" />
            <div className="box one">
            <h1>heading</h1>
            <p>Lorem, ipsum dolor.lorem4fafofnf</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;