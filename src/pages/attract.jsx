import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../style/attract.css"; // Link CSS file

// Import images
import pic1 from "../images/rooms/room1.jpeg";

const Attract = () => {
  return (
    <div className="container">
      {/* First Row */}
      <div className="row">
        <div className="image">
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
          <h1 className="room-name">
            room name
          </h1>
        </div>
        <div className="text">Text</div>
      </div>

      {/* Second Row */}
      <div className="row">
        <div className="text">Text</div>
        <div className="image">
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
        </div>
      </div>
      <div className="row">
        <div className="image">
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
        </div>
        <div className="text">Text</div>
      </div>
      <div className="row">
        <div className="text">Text</div>
        <div className="image">
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
        </div>
      </div>
    </div>
  );
};

export default Attract;