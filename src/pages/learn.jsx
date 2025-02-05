import React, { useEffect, useRef } from 'react';
import '../style/learn.css';
import pic1 from '../images/rooms/room1.jpeg';
import pic2 from '../images/rooms/room2.jpeg';
import pic3 from '../images/rooms/room3.jpeg';
import pic4 from '../images/rooms/room4.jpeg';

const images = [pic1, pic2, pic3, pic4];

const Learn = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                containerRef.current.style.transition = 'transform 1s linear';
                containerRef.current.style.transform = 'translateX(-450px)';

                setTimeout(() => {
                    containerRef.current.style.transition = 'none';
                    containerRef.current.appendChild(containerRef.current.firstElementChild);
                    containerRef.current.style.transform = 'translateX(0)';
                }, 1000);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
      <>
        <div className="container-slider-div">
           <h1 className='slider-header head-one'>destination</h1>
           <div className="slider">
            <div className="slider-container" ref={containerRef}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`slider ${index}`} className="slider-image" />
                ))}
            </div>
        </div>
        </div>
        <div className="container-slider-div">
        <h1 className='slider-header head-two'>highlights</h1>
        <div className="slider">
         <div className="slider-container" ref={containerRef}>
             {images.map((image, index) => (
                 <img key={index} src={image} alt={`slider ${index}`} className="slider-image" />
             ))}
         </div>
     </div>
     </div>
     </>
        
    );
};

export default Learn;