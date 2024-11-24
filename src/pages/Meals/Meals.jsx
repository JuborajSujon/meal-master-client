import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "./../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import MealCard from "../../components/MealCard/MealCard";

import InfiniteScroll from "react-infinite-scroll-component";
import useScrollToTop from "./../../hooks/useScrollToTop";
import useAxiosPublic from "./../../hooks/useAxiosPublic";

export default function Meals() {
  useScrollToTop();
  const [items, setItems] = useState(Array.from({ length: 6 }));
  const [hasMore, setHasMore] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 10]);

  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, maxPrice] = priceRange;
  const [totalMeals, setTotalMeals] = useState(0);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axiosPublic("/all-menu", {
          params: {
            search,
            category,
            minPrice,
            maxPrice,
          },
        });
        setMeals(res.data.meals);
        setTotalMeals(res.data.count);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [search, category, minPrice, maxPrice]);

  // handle infinite scroll
  const fetchMoreData = () => {
    if (items.length >= totalMeals) {
      setHasMore(false);
      return;
    }
    const time = setTimeout(() => {
      setItems((prevItems) => prevItems.concat(Array.from({ length: 6 })));
      clearTimeout(time);
    }, 1000);
  };

  const handleRangeChange = (event) => {
    const value = event.target.value;
    setPriceRange([0, parseInt(value)]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(searchText);
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
          <div>
            <SectionTitle
              title="Meals"
              subTitle="Ultimate dining experience with unlimited options"
            />
            <p className="text-xl font-medium text-blue-400 ml-4">
              Total {totalMeals} meals found
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center px-4 text-slate-800 dark:text-slate-300">
            <div>
              <div className="space-y-2">
                <p className="font-medium">Name</p>
                <form onSubmit={handleSearch}>
                  <label className="input input-bordered flex border-warning items-center gap-2 bg-white">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      name="search"
                      className="grow"
                      placeholder="Search"
                    />
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
                </form>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="space-y-2">
                  <p className=" font-medium">Category</p>
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    defaultValue={category}
                    className="select text-sm select-warning min-w-32 max-w-xs w-full bg-white">
                    <option value="">All Meals</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
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
                    max="10"
                    value={maxPrice}
                    onChange={handleRangeChange}
                    className="w-full max-w-xs"
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
          <p
            style={{
              textAlign: "center",
              marginTop: "40px",
              color: "blue",
              fontSize: "20px",
            }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        {meals.length === 0 && <p className="text-center">No meal found</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 justify-between">
          {meals?.map((item) => (
            <MealCard item={item} key={item._id} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
