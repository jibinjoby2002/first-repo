import React, { use, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../style/attract.css"; // Link CSS file
import gsap from "gsap";

// Import images
import pic1 from "../images/rooms/room1.jpeg";

const Attract = () => {
  const oneref = useRef(null);
  const tworef = useRef(null);
  const threeref = useRef(null);
  const fourref = useRef(null);
  const imageoneref = useRef(null);
  const imagetworef = useRef(null);
  const imagethreeref = useRef(null);
  const imagefourref = useRef(null);
  const textoneref = useRef(null);
  const textworef = useRef(null);
  const textthreeref = useRef(null);
  const textfourref = useRef(null);

  useEffect(() => {
    gsap.to(oneref.current, {
      duration: 1,
      y: -20,
      opacity: 1,
      ease: "elastic.out",
      delay: 2,
    });

    gsap.to(tworef.current, {
      duration: 1,
      y: -20,
      opacity: 1,
      ease: "power3.inOut",
      delay: 2.5,
    });

    gsap.to(threeref.current, {
      duration: 1,
      y: -20,
      opacity: 1,
      ease: "power3.inOut",
      delay: 3,
    });

    gsap.to(fourref.current, {
      duration: 1,
      y: -20,
      opacity: 1,
      ease: "power3.inOut",
      delay: 3.5,
    });

    gsap.fromTo(
      imageoneref.current,
      { x: "-100%", opacity: 0 },
      { x: 0, duration: 1, ease: "bounce", opacity: 1, delay: 0.5 }
    );

    gsap.fromTo(
      imagetworef.current,
      { x: "100%", opacity: 0 },
      { x: 0, duration: 1, ease: "power3.inOut", opacity: 1, delay: 1 }
    );

    gsap.fromTo(
      imagethreeref.current,
      { x: "-100%", opacity: 0 },
      { x: 0, duration: 1, ease: "power3.inOut", opacity: 1, delay: 1.5 }
    );

    gsap.fromTo(
      imagefourref.current,
      { x: "100%", opacity: 0 },
      { x: 0, duration: 1, ease: "power3.inOut", opacity: 1, delay: 2 }
    );
    gsap.fromTo(
      textoneref.current,
      { y: "100%", opacity: 0 },
      { y: 0, duration: 1, ease: "elastic.out", opacity: 1, delay: 0 }
    );
    gsap.fromTo(
      textworef.current,
      { y: "100%", opacity: 0 },
      { y: 0, duration: 1, ease: "power3.inOut", opacity: 1, delay: 0.5 }
    );

    gsap.fromTo(
      textthreeref.current,
      { y: "100%", opacity: 0 },
      { y: 0, duration: 1, ease: "power3.inOut", opacity: 1, delay: 1 }
    );

    gsap.fromTo(
      textfourref.current,
      { y: "100%", opacity: 0 },
      { y: 0, duration: 1, ease: "power3.inOut", opacity: 1, delay: 1.5 }
    );
  }, []);
  return (
    <div className="container">
      {/* First Row */}
      <div className="row">
        <div className="image" ref={imageoneref}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
          >
            <SwiperSlide>
              <img src={pic1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic1} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic1} alt="Slide 3" />
            </SwiperSlide>
          </Swiper>
          <h1 className="room-name room-one" ref={oneref}>
            Deluxe Cottage
          </h1>
        </div>
        <div className="text" ref={textoneref}>
          These palm cottages are designed with natural aesthetics and come with
          amenities such as a balcony, forest view, and sitting area.
        </div>
      </div>

      {/* Second Row */}
      <div className="row">
        <div className="text" ref={textworef}>
          Stone cottages that offer a garden view, balcony, and sitting area,
          providing a comfortable stay amidst nature.
        </div>
        <div className="image" ref={imagetworef}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
          >
            <SwiperSlide>
              <img src={pic1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic1} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic1} alt="Slide 3" />
            </SwiperSlide>
          </Swiper>
          <h1 className="room-name room-two" ref={tworef}>
            Executive Cottages
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="image" ref={imagethreeref}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
          >
            <SwiperSlide>
              <img src={pic1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic1} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic1} alt="Slide 3" />
            </SwiperSlide>
          </Swiper>
          <h1 className="room-name room-three" ref={threeref}>
            Family Suites{" "}
          </h1>
        </div>
        <div className="text" ref={textthreeref}>
          Ideal for larger groups or families, these suites feature double
          bedrooms, a balcony with forest views, a kitchenette, and ample space
          to accommodate additional guests.
        </div>
      </div>
    </div>
  );
};

export default Attract;
