import "../style/framer.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pic1 from "../images/beach.jpg";
import pic2 from "../images/building.jpg";
import pic3 from "../images/frog.jpeg";
import pic4 from "../images/pirate.jpg";
import pic5 from "../images/rooms/room5.jpeg"

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Framer() {
  const images = [pic1, pic2, pic3, pic4];
  const textRef = useRef(null);
  const boxRef = useRef(null);
  const box2Ref = useRef(null);
  const formref = useRef(null)
  const headref = useRef(null)
  const imageContainerRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    // Text animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );

    // Box animation
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );

    // Box 2 animation
    gsap.fromTo(
      box2Ref.current,
      { opacity: 0, backgroundColor: "transparent" },
      {
        opacity: 1,
        backgroundColor: "black",
        duration: 2.5,
        scrollTrigger: {
          trigger: box2Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );

    // Image staggered animation with scrub effect
    gsap.fromTo(
      imageRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 90%",
          end: "bottom 90%",
          scrub: true,
          pin:false,
          markers:false
        },
      }
    );

    gsap.fromTo(
      headref.current,
      {opacity:0,y:50},
      {
        opacity:1,
        y:0,
        duration:0.5,
        scrollTrigger:{
          trigger:formref.current,
          start:"60% 90%",
          end:"bottom 90%",
          scrub:true

        }
      }
    )



  }, []);

  return (
    <div className="containerf">
      {/* Text Section */}
      <div className="one first" ref={textRef}>
        <div className="head">hey jibin</div>
        <div className="text-content">
          <h1>its jibin</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, saepe.</p>
        </div>
      </div>

      {/* Box Section */}
      <div className="one second">
        <div className="box" ref={boxRef}>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, architecto.
          </p>
        </div>
        <div className="box" ref={box2Ref}>box2</div>
      </div>

      {/* Image Scroll-Triggered Staggered Animation */}
      <div className="one third" ref={imageContainerRef}>
        {images.map((pic, index) => (
          <div
            className="image-container"
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
          >
            <img src={pic} alt="" />
          </div>
        ))}
      </div>
      <div className="one fourth" ref={formref}>

      <div className="contact-container">
        {/* Left Side - Image */}
        <div className="contact-image">
          <img src={pic5} alt="Contact" />
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.1640779372387!2d75.8447913!3d11.807232599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5d12cffc2a507%3A0x4a6316b023a382df!2sOxyfarm%20Resorts!5e1!3m2!1sen!2sin!4v1738442832934!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form">
          <h2 ref={headref}>Contact Us</h2>
          <form>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Enter your message" required></textarea>
            </div>

            <button type="submit" className="send-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Framer;
