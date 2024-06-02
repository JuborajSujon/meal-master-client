import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaShareAlt } from "react-icons/fa";
import { FaEye, FaHeart } from "react-icons/fa6";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import MealCardSlider from "../../components/MealCardSlider/MealCardSlider";
import StudentRatings from "../../components/StudentRatings/StudentRatings";

export default function MealDetails() {
  const [rating, setRating] = useState(3);
  return (
    <div className="px-4 py-20">
      <Helmet>
        <title>Meal Details</title>
      </Helmet>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* left side */}
        <div>
          {/* Meal Image */}
          <div className="overflow-hidden w-full">
            <img
              className="w-full max-h-[70vh] object-cover"
              src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>

          {/* Post Details */}
          <div className="py-6">
            <div className="">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-300">
                Admin/distributor Name
              </h3>
              <h4>Post Date</h4>
            </div>

            <ul className="flex justify-start items-center gap-4">
              <li className="flex items-center gap-2">
                <FaHeart className="text-red-600" />
                <span>Save</span>
              </li>

              <li className="flex items-center gap-2">
                <FaShareAlt />
                <span>Share</span>
              </li>
            </ul>
          </div>
        </div>

        {/* right side */}
        <div className="lg:pr-16">
          <div className="flex justify-between items-start">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-300">
              Product Name
            </h2>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-300 mr-3">
              $10
              <del className="text-base font-normal text-slate-400 ml-3">
                12
              </del>
            </h3>
          </div>
          <p className="text-lg font-bold text-slate-900 dark:text-slate-300">
            <span className="text-slate-400 text-base mr-2">by</span>
            Healthy Feast Corner
          </p>

          <div className="flex items-center gap-2 ">
            {/* Rating - read only */}
            <Rating
              style={{ maxWidth: 120 }}
              value={rating}
              onChange={setRating}
            />

            <span> | </span>

            {/* review - read only */}
            <span className="text-slate-800 text-base leading-10">
              3 reviews
            </span>
          </div>

          <div className="dark:text-slate-300 space-y-3 mt-6">
            <p>
              Provident debitis diamlorem conubia ut, fugiat magnam wisi felis
              laborum sint. Elit. Auctor justo, rhoncus veritatis, velit risus
              amet! Orci.
            </p>
            <ul className="*:mb-1">
              <h4>Food Ingredients</h4>
              <li>Potato</li>
              <li>Onion</li>
            </ul>
          </div>

          <div className="text-center flex justify-start mt-10">
            <button className="btn bg-yellow-400   hover:text-slate-900 dark:text-slate-900 hover:bg-yellow-500 text-base">
              Purchase
            </button>
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
                    564
                  </h4>
                  <p className="text-slate-900 dark:text-slate-300">Calories</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-slate-300">
                    564
                  </h4>
                  <p className="text-slate-900 dark:text-slate-300">Calories</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-slate-300">
                    564
                  </h4>
                  <p className="text-slate-900 dark:text-slate-300">Calories</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-slate-300">
                    564
                  </h4>
                  <p className="text-slate-900 dark:text-slate-300">Calories</p>
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
        <div>
          <MealCardSlider />
        </div>
      </div>

      {/* Student Ratings */}
      <div className="mt-10">
        <StudentRatings />
      </div>

      {/* Student Review*/}
      <div className="mt-10"></div>
    </div>
  );
}
