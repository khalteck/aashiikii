import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, EffectCube, Navigation } from "swiper";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import carousel1Data from "../../data/carousel1.json";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <>
      <Swiper
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectCube, Navigation]}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        ref={swiperRef}
      >
        {carousel1Data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className={`w-fit h-fit mx-auto p-5 bg-black/70 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-full p-5 max-w-[400px] md:w-[500px] h-[150px] md:h-[200px] border-4 md:border-8 border-[#F1E4D8] flex justify-center items-center text-white text-[1.75rem] md:text-[2rem] font-bold text-center">
                  Explore {item}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
