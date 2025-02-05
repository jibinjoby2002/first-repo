import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
// import {motion} from 'framer-motion'
import '../style/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import video from '../video/oxyfarm.mp4';
import { motion } from "framer-motion";
import pic1 from '../images/beach.jpg'
import pic2 from '../images/building.jpg'
import pic3 from '../images/london.webp'
import pic4 from '../images/night.webp'
import pic5 from '../images/pirate.jpg'
import pic6 from '../images/sky.jpg'
import pic7 from '../images/rotterdam.jpg'

const images = [
  pic1,pic2,pic3,pic4,pic5,pic6,pic7
]

function Video() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const slider = useRef(null)
  

    return (
      <div className="slider-container">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="image-container"
        >
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          <p>jibin</p>

        </motion.div>
  
        <div className="buttons">
          <button onClick={prevSlide} className='button-one'>Previous</button>
          <button onClick={nextSlide} className='button-two'>Next</button>
        </div>
      </div>
      

  );
}

export default Video;
