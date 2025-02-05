import React, { useState } from 'react';
import '../style/frog.css';
import pic1 from '../images/rooms/room1.jpeg';
import pic2 from '../images/rooms/room2.jpeg';
import pic3 from '../images/rooms/room3.jpeg';

function Frog() {
  const pics = [pic1, pic2, pic3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeImage = (direction) => {
    if (isTransitioning) return; // Prevent spamming clicks during animation

    setIsTransitioning(true); // Start animation

    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === 'next') {
          return (prevIndex + 1) % pics.length;
        } else {
          return prevIndex === 0 ? pics.length - 1 : prevIndex - 1;
        }
      });

      setIsTransitioning(false); // Reset transition after update
    }, 500); // Matches animation duration
  };

  return (
    <div className="container-images">
      <div className="content-images">
        <div className="pic-box">
          <img
            src={pics[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className={`image-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}
          />
        </div>
        <div className="right-side-image">
          <div className={`text-contents ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
            <h1>Heading {currentIndex + 1}</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <button className="prev" onClick={() => changeImage('prev')}>Prev</button>
      <button className="next" onClick={() => changeImage('next')}>Next</button>
    </div>
  );
}

export default Frog;
