import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, EffectCoverflow, Navigation } from "swiper";
import "swiper/css/effect-coverflow";
import "../../swiper-pagination.css";
import "swiper/css/navigation";
import productData from "../../data/product.json";
import ProductCard from "../common/ProductCard";

const Carousel1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
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
        // pagination={{
        //   clickable: true,
        // }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow, Navigation]}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        ref={swiperRef}
      >
        {productData?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ProductCard item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel1;
