import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import MealCard from "../MealCard/MealCard";
const MealCardSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper">
        <SwiperSlide>
          <MealCard />
        </SwiperSlide>
        <SwiperSlide>
          <MealCard />
        </SwiperSlide>
        <SwiperSlide>
          <MealCard />
        </SwiperSlide>
        <SwiperSlide>
          <MealCard />
        </SwiperSlide>
        <SwiperSlide>
          <MealCard />
        </SwiperSlide>
        <SwiperSlide>
          <MealCard />
        </SwiperSlide>
        <SwiperSlide>
          <MealCard />
        </SwiperSlide>
        <SwiperSlide>
          <MealCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MealCardSlider;
