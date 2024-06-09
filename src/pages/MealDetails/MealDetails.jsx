import { useState } from "react";
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
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { MdRateReview } from "react-icons/md";
import useScrollToTop from "./../../hooks/useScrollToTop";
import moment from "moment";
import useSingleMeal from "../../hooks/useSingleMeal";
import Loading from "../../components/Loading/Loading";
import useUser from "../../hooks/useUser";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export default function MealDetails() {
  useScrollToTop();
  const { mealId } = useParams();
  const [like, setLike] = useState(false);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();

  const [singleMeal, isLoading, refetch] = useSingleMeal(mealId);
  const [userData] = useUser();
  const { _id: userId, name, email, photo, badge } = userData;

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
    meal_category,
    meal_subcategory,
    meal_ingredients,
    nutrition_facts,
    post_createdAt,
    post_updatedAt,
    short_description,
    rating: mealRating,
    likes_count,
    reviews,
    ratingCount,
  } = singleMeal || {};

  // handle like
  const handleLike = async () => {
    setLike(!like);

    try {
      const likeObj = {
        meal_id: _id,
        user_id: userId,
        name: name,
        email: email,
        photo: photo,
        liked: like,
        created_time: new Date().toISOString(),
      };

      const result = await axiosSecure.post(`/like`, likeObj);
      if (result.status === 200) {
        refetch();
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  // handle Request Meal
  const handleMealRequest = async (item) => {
    if (userData && userData.email) {
      // send cart item to server
      const cartItem = {
        menuId: _id,
        email: email,
        meal_title,
        image,
        price,
        req_status: "pending",
      };

      const result = await axiosSecure.post(`/carts`, cartItem);

      if (result.status === 200) {
        refetch();
        toast.success("Request Meal Success!", { autoClose: 1500 });
      }
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login first. Thank you!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

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
        <div className="min-w-96 w-full">
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
              <h4>
                <span className="font-semibold">Admin Email</span> :{" "}
                {admin.email}
              </h4>
              <h4>
                <span className="font-semibold">Post Date :</span>{" "}
                {moment(post_createdAt).fromNow()}
              </h4>
              <h4>
                <span className="font-semibold">Last Updated Date :</span>{" "}
                {moment(post_updatedAt).fromNow()}
              </h4>
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

          {/* Meal Name, Price, Review and Rating */}
          <div className="flex items-center gap-2 ">
            {/* Rating - read only */}
            <Rating
              style={{ maxWidth: 120 }}
              value={mealRating.averageRating || 0}
              readOnly
            />

            <span> | </span>

            {/* review - read only */}
            <span className="text-slate-800 dark:text-slate-300 text-base leading-10">
              {mealRating.reviewCount || 0} reviews
            </span>
          </div>

          {/* category and sub-category and serve amount */}
          <div className="py-5">
            <h4>
              <span className="font-semibold">Category : </span> {meal_category}
            </h4>
            <h4>
              <span className="font-semibold">Sub-Category : </span>{" "}
              {meal_subcategory}
            </h4>
            <h4>
              <span className="font-semibold">Serve Amount : </span>{" "}
              {serve_amount}
            </h4>
          </div>

          {/* cooking time and prep time and total time */}
          <div className="flex gap-16 items-center justify-start">
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

          {/* Food Ingredients and Description */}
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

          {/* Page Action Buttons section  */}
          <div className="text-center flex justify-start mt-10 gap-6">
            {badge === "bronze" ? (
              <Link to="/subscription">
                <button className="btn bg-yellow-400   hover:text-slate-900 dark:text-slate-900 hover:bg-yellow-500 text-base">
                  Meal Request
                </button>
              </Link>
            ) : (
              <button
                onClick={() => handleMealRequest(singleMeal)}
                className="btn bg-yellow-400   hover:text-slate-900 dark:text-slate-900 hover:bg-yellow-500 text-base">
                Meal Request
              </button>
            )}

            <ul className="flex flex-wrap justify-start items-center gap-4">
              <li
                onClick={handleLike}
                className="flex cursor-pointer items-center gap-2">
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
                className="flex cursor-pointer items-center gap-2">
                <MdRateReview size={24} className="text-orange-600" />
                <span>Review</span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <FaHeart size={24} className="text-orange-600" />
                <span>Save</span>
              </li>

              <li className="flex cursor-pointer items-center gap-2">
                <FaShareAlt />
                <span>Share</span>
              </li>
            </ul>
          </div>

          {/* Nutrition Facts */}

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

          {/* People are viewing this right now */}
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
          Similar Category Meals
        </h3>
        {/* meal slider */}
        <div>
          <MealCardSlider meal_category={meal_category} />
        </div>
      </div>

      {/* Student Ratings */}
      <div className="mt-16">
        {mealRating && (
          <StudentRatings mealRating={mealRating} ratingCount={ratingCount} />
        )}
      </div>

      {/* Student Review*/}
      <div id="reviews" className="mt-24">
        <StudentReview reviews={reviews} refetch={refetch} id={_id} />
      </div>
    </div>
  );
}
