import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Link } from 'react-router-dom';
import '../style/home.css';
import pic1 from '../images/rooms/room1.jpeg';

gsap.registerPlugin(ScrollToPlugin);

const Home = () => {
  useEffect(() => {
    gsap.fromTo('.logo',
      {opacity:0,x:-50},
      {opacity:1,x:0,duration:0.5,ease:"power1.in"}
    )
    gsap.to('.nav-link', { opacity: 1, duration: 1, stagger: 0.2 });
    gsap.fromTo('.para-one', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.9 });
    gsap.from('.welcome-text', { opacity: 0, y: 30, duration: 1, delay: 0.5 });
    gsap.from('.welcome-button', { opacity: 0, y: 30, duration: 1, delay: 1 });
  }, []);

  const scrollToSection = (sectionId) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: `#${sectionId}`,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className="nav-links">
          <Link to="/section1" className="nav-link">Section 1</Link>
          <Link to="/section2" className="nav-link">Section 2</Link>
          <Link to="/section3" className="nav-link">Section 3</Link>
        </div>
      </nav>

      <main className="main-section">
        <img src={pic1} alt="Background" className="background-image" />
        <div className="welcome-text">Welcome</div>
        <div className="main-content">
          <p className="para-one">Some introduction text goes here.</p>
          <button className="welcome-button" onClick={() => scrollToSection("section1")}>Learn More</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
