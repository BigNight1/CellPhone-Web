import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../styles/Slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper py-4"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center ">
            <div className="slider">
              <h1>Revisa Nuestro Trabajo</h1>
              <p>Explora imágenes de trabajos realizados y nuestro local</p>
              <div className="juxtaposeContainer">
                <iframe
                  title="Comparación de imágenes"
                  className="juxtaposeIframe"
                  src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=2d7e4eaa-5589-11ee-b5be-6595d9b17862"
                  width="100%"
                ></iframe>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex items-center justify-center  ">
            <img src="/images/celular2.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex items-center justify-center  ">
            <img src="/images/gato.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex items-center justify-center  ">
            <img src="/images/perro.png" alt="" />
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
  );
};

export default Slider;
