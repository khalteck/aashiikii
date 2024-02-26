import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, EffectCoverflow, Navigation } from "swiper";
import "swiper/css/effect-coverflow";
import "../../swiper-pagination.css";
import "swiper/css/navigation";
import ProductCard from "../common/ProductCard";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";

const Carousel1 = ({ array }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        ref={swiperRef}
        className="h-[680px]"
      >
        {array?.map((item, index) => {
          return (
            <SwiperSlide key={index} className="">
              <ProductCard item={item} />
            </SwiperSlide>
          );
        })}
        <div className="w-full h-[200px] flex items-center justify-between gap-3 absolute bottom-[-70px] z-[100]">
          <div onClick={slidePrev} className="p-3 border border-neutral-950">
            <FaChevronLeft size="20px" color="black" />
          </div>

          <div onClick={slideNext} className="p-3 border border-neutral-950">
            <FaChevronRight size="20px" color="black" />
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default Carousel1;
