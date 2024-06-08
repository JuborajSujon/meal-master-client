import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaShareAlt } from "react-icons/fa";
import { FaArrowRight, FaEye, FaHeart } from "react-icons/fa6";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import MealCardSlider from "../../components/MealCardSlider/MealCardSlider";
import StudentRatings from "../../components/StudentRatings/StudentRatings";
import StudentReview from "../../components/StudentReview/StudentReview";
import { BiSolidLike } from "react-icons/bi";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Link, useLoaderData } from "react-router-dom";
import { MdRateReview } from "react-icons/md";
import useScrollToTop from "./../../hooks/useScrollToTop";
import moment from "moment";

export default function MealDetails() {
  const loadedData = useLoaderData();

  const {
    _id,
    meal_title,
    price,
    serve_amount,
    admin,
    prep_time,
    cooking_time,
    total_time,
    distributor_name,
    image,
    likes_count,
    meal_category,
    meal_subcategory,
    meal_ingredients,
    nutrition_facts,
    post_createdAt,
    post_updatedAt,
    rating: mealRating,
    short_description,
  } = loadedData;
  const [rating, setRating] = useState(mealRating.average || 0);

  //  ensure that the new page starts at the top when navigating
  useScrollToTop();
  return (
    <div className="px-4 py-20">
      <Helmet>
        <title>Meal Details</title>
      </Helmet>
      {/* breadcrumbs */}
      <Breadcrumbs />

      {/* main content */}
      <div className="flex flex-col md:flex-row justify-between gap-6 mt-4">
        {/* left side */}
        <div>
          {/* Meal Image */}
          <div className="overflow-hidden w-full">
            <img
              className="w-full max-h-[70vh] object-cover"
              src={image}
              alt={meal_title}
            />
          </div>

          {/* Post Details */}
          <div className="py-6">
            <div className="">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-300">
                Admin Name : {admin.name}
              </h3>
              <h4>Admin Email : {admin.email}</h4>
              <h4>Post Date : {moment(post_createdAt).fromNow()}</h4>
              <h4>Last Updated Date : {moment(post_createdAt).fromNow()}</h4>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="lg:pr-16">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-300">
              {meal_title}
            </h2>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-300 mr-3">
              ${price}
            </h3>
          </div>
          <p className="text-base font-medium text-slate-900 dark:text-slate-300">
            <span className="text-slate-400 text-base mr-2">by</span>
            {distributor_name}
          </p>

          <div className="flex items-center gap-2 ">
            {/* Rating - read only */}
            <Rating style={{ maxWidth: 120 }} value={rating} readOnly />

            <span> | </span>

            {/* review - read only */}
            <span className="text-slate-800 dark:text-slate-300 text-base leading-10">
              {mealRating.count} reviews
            </span>
          </div>

          <div className="flex gap-2 items-center justify-around">
            <p className="text-sm text-slate-900 dark:text-slate-300 items-center justify-center flex flex-col">
              <span className="font-medium">Prep.Time</span>{" "}
              <span>{prep_time}</span>
            </p>
            <p className="text-sm text-slate-900 dark:text-slate-300 items-center justify-center flex flex-col">
              <span className="font-medium">cooking Time</span>{" "}
              <span>{cooking_time}</span>
            </p>
            <p className="text-sm text-slate-900 dark:text-slate-300 items-center justify-center flex flex-col">
              <span className="font-medium">Total Time</span>{" "}
              <span>{total_time}</span>
            </p>
          </div>

          <div className="dark:text-slate-300 space-y-3 mt-6">
            <p>{short_description}</p>
            <ul className="*:mb-1">
              <h4 className="text-lg font-medium underline decoration-orange-300">
                Food Ingredients
              </h4>

              {meal_ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2">
                  {" "}
                  <FaArrowRight className="text-orange-600" size={18} />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center flex justify-start mt-10 gap-6">
            <Link to="/subscription">
              <button className="btn bg-yellow-400   hover:text-slate-900 dark:text-slate-900 hover:bg-yellow-500 text-base">
                Meal Request
              </button>
            </Link>
            <ul className="flex flex-wrap justify-start items-center gap-4">
              <li className="flex items-center gap-2">
                <BiSolidLike size={24} className="text-orange-600" />
                <span>{likes_count}</span>
              </li>
              <li
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#review").offsetTop,
                    behavior: "smooth",
                  });
                }}
                className="flex items-center gap-2">
                <MdRateReview size={24} className="text-orange-600" />
                <span>Review</span>
              </li>
              <li className="flex items-center gap-2">
                <FaHeart size={24} className="text-orange-600" />
                <span>Save</span>
              </li>

              <li className="flex items-center gap-2">
                <FaShareAlt />
                <span>Share</span>
              </li>
            </ul>
          </div>

          <div className="mt-10 md:mt-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-300">
              Nutrition Facts
              <span className="text-slate-400 text-base ml-2">
                {" "}
                (per serving)
              </span>
            </h3>
            <div className="border border-slate-200 px-4 py-2 rounded-md mt-6">
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-slate-300">
                    {nutrition_facts.calories}
                  </h4>
                  <p className="text-slate-900 dark:text-slate-300">Calories</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-slate-300">
                    {nutrition_facts.fats}
                  </h4>
                  <p className="text-slate-900 dark:text-slate-300">Fat</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-slate-300">
                    {nutrition_facts.carbs}
                  </h4>
                  <p className="text-slate-900 dark:text-slate-300">Carbs</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-slate-300">
                    {nutrition_facts.protein}
                  </h4>
                  <p className="text-slate-900 dark:text-slate-300">Protein</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-slate-900 dark:text-slate-300 flex items-center gap-2">
              <FaEye className="text-orange-400" />
              <span className="text-orange-400">1,000</span> People are viewing
              this right now
            </p>
          </div>
        </div>
      </div>

      {/* You may also like section - similar meals*/}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-300">
          You may also like
        </h3>
        {/* meal slider */}
        <div>{/* <MealCardSlider /> */}</div>
      </div>

      {/* Student Ratings */}
      <div className="mt-16">
        <StudentRatings />
      </div>

      {/* Student Review*/}
      <div id="reviews" className="mt-24">
        <StudentReview />
      </div>
    </div>
  );
}
