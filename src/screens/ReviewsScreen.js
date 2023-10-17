import React from "react";

import styles from "../styles/reviews-jin-styles/reviews.css";
import Slider from "react-slick";

// Import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import image01 from "../assets/compress1.jpg";
import image02 from "../assets/compress2.jpg";
import image03 from "../assets/compress3.jpg";
import image04 from "../assets/compress4.jpg";
import image05 from "../assets/compress5.jpg";
import image06 from "../assets/compress6.jpg";
import image07 from "../assets/compress7.jpg";
import image08 from "../assets/compress8.jpg";
import image09 from "../assets/compress9.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ReviewsScreen = () => {
  return (
    <div className="reviews-jintropine-screen">
      <div className="container">
        <h3 className="reviews-heading">Отзывы</h3>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          navigation={true}
          centeredSlides={true}
          centerInsufficientSlides={true}
          centeredSlidesBounds={true}
          pagination={false}
          //   scrollbar={{ draggable: true }}
          className="carousel"
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={image01} className="image"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image02} className="image"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image03} className="image"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image04} className="image"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image05} className="image"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image06} className="image"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image07} className="image"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image08} className="image"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image09} className="image"></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsScreen;
