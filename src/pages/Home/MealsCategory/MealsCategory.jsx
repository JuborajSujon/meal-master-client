import MealCard from "../../../components/MealCard/MealCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function MealsCategory() {
  return (
    <div className="py-16">
      <div>
        <SectionTitle title="Menu" subTitle="Meals Category" />
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <MealCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
