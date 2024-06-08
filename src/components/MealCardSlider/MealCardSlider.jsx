import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import MealCard from "../MealCard/MealCard";
import useMenu from "./../../hooks/useMenu";
import Loading from "../Loading/Loading";
const MealCardSlider = ({ meal_category }) => {
  const [menu, loading] = useMenu();
  const sliderMenu = menu?.filter(
    (menu) => menu.meal_category === meal_category
  );

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper">
        {sliderMenu?.map((item) => (
          <SwiperSlide key={item._id}>
            <MealCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MealCardSlider.propTypes = {
  meal_category: PropTypes.string,
};

export default MealCardSlider;
