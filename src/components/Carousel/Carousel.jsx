import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BiSearch } from "react-icons/bi";

export default function Carousel() {
  return (
    <div className="relative">
      <div className="h-[80vh] bg-slate-800/70 absolute inset-0 z-10">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-4xl mt-16">
          <h1 className="text-2xl md:text-4xl font-bold leading-none text-white">
            Streamline Your
            <span className="text-amber-600"> Hostel Dining</span> Experience
          </h1>
          <p className="px-8 mt-8 mb-12 text-sm sm:text-lg text-white">
            Efficient meal management and insightful reviews at your fingertips
            with MealMaster.
          </p>
          <div className="flex h-8 md:h-12 flex-row max-w-sm relative ">
            <input
              type="text"
              placeholder=""
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3 border border-gray-300 bg-white"
            />

            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3  bg-orange-500 dark:text-slate-200 flex items-center">
              <BiSearch
                size={20}
                className="text-slate-800 dark:text-slate-200"
              />
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="h-[80vh] bg-red-600">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <div
              className={`relative h-[80vh] w-full bg-[url(https://i.ibb.co/pLdCJjD/vegetable-curry-recipe.jpg)] bg-no-repeat bg-cover flex items-center bg-center`}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`relative h-[80vh] w-full bg-[url(https://i.ibb.co/g7xCbVR/Pasta-Primavera.jpg)] bg-no-repeat bg-cover flex items-center bg-center`}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`relative h-[80vh] w-full bg-[url(https://i.ibb.co/4fJwdfp/chicken-stir-fry.jpg)] bg-no-repeat bg-cover flex items-center bg-center`}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`relative h-[80vh] w-full bg-[url(https://i.ibb.co/4fJwdfp/chicken-stir-fry.jpg)] bg-no-repeat bg-cover flex items-center bg-center`}></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
