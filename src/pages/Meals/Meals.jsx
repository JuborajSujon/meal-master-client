import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "./../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import MealCard from "../../components/MealCard/MealCard";

import InfiniteScroll from "react-infinite-scroll-component";
import useScrollToTop from "./../../hooks/useScrollToTop";

export default function Meals() {
  const [items, setItems] = useState(Array.from({ length: 6 }));
  const [hasMore, setHasMore] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [minPrice, maxPrice] = priceRange;

  //  ensure that the new page starts at the top when navigating
  useScrollToTop();

  // handle infinite scroll
  const fetchMoreData = () => {
    if (items.length >= 500) {
      setHasMore(false);
      return;
    }
    // a fake async API call which sends 20 more records in .5 secs
    setTimeout(() => {
      setItems((prevItems) => prevItems.concat(Array.from({ length: 6 })));
    }, 1000);
  };

  const handleRangeChange = (event) => {
    const value = event.target.value;
    setPriceRange([0, parseInt(value)]);
  };

  return (
    <div className="px-4 py-20">
      <Helmet>
        <title>Meals</title>
      </Helmet>
      <Breadcrumbs />

      {/* Meals Filter Section */}
      <div className="py-6">
        <div className="lg:flex justify-between">
          <SectionTitle
            title="Meals"
            subTitle="Ultimate dining experience with unlimited options"
          />
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center px-4">
            <div>
              <div className="space-y-2">
                <p className="font-medium">Name</p>
                <label className="input input-bordered flex border-warning items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-6 h-6 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="space-y-2">
                  <p className=" font-medium">Category</p>
                  <select className="select text-lg select-warning w-full">
                    <option value="all">All Meals</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="space-y-1">
                  <p className=" font-medium">Price</p>
                  <p>${maxPrice}</p>
                  <input
                    type="range"
                    min={minPrice}
                    max="100"
                    value={maxPrice}
                    onChange={handleRangeChange}
                    className="w-full "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meals Section */}

      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center py-5">
            <span className="loading loading-bars w-20"></span>
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
          {items.map((_, index) => (
            <MealCard key={index} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
