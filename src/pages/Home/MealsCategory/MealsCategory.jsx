import MealCard from "../../../components/MealCard/MealCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function MealsCategory() {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="py-16">
      <div className="flex justify-start items-end gap-6">
        <div>
          <SectionTitle title="Menu" subTitle="Meals Category" />
        </div>
        <div>
          <p className="mb-2">Select your category</p>
          <select className="select font-bold text-lg select-warning w-full max-w-xs">
            <option value="all">All Meals</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>
      </div>
      <div className="relative mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper">
          {slides.map((slide) => (
            <SwiperSlide key={slide}>
              <MealCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
