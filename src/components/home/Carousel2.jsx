import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, EffectCreative, Navigation } from "swiper";
import "swiper/css/effect-creative";

import "swiper/css/navigation";
import carousel1Data from "../../data/carousel1.json";

const Carousel2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-125%", 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ["125%", 0, -800],
            rotate: [0, 0, 90],
          },
          duration: 1000, // Set the speed to 1000 milliseconds (1 second)
        }}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay, EffectCreative, Navigation]}
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
                <div className="w-full p-5 sm:max-w-[400px] md:w-[500px] h-[120px] md:h-[200px] border-4 md:border-8 border-[#F1E4D8] flex justify-center items-center text-white text-[1.5rem] md:text-[2rem] font-bold text-center">
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

export default Carousel2;
