import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Main Swiper components
import { Navigation, Pagination } from 'swiper/modules'; // Import Navigation and Pagination modules
import 'swiper/css'; // Main Swiper CSS
import 'swiper/css/navigation'; // Navigation module CSS
import 'swiper/css/pagination'; // Pagination module CSS
import './Slider.css';

import { SliderProducts } from '../../data/products';

function Slider() {
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation
        pagination={{ clickable: true }}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true} // Remove loopFillGroupWithBlank
      >
        {SliderProducts.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Shop now</div>
            </div>
            <img src={slide.img} alt="product" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
