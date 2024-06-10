import moment from "moment";
import { Helmet } from "react-helmet-async";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Loading from "../../../../components/Loading/Loading";

import useSigleUpcomingMeal from "../../../../hooks/useSigleUpcomingMeal";

const UpcomingMealsDetails = () => {
  const { mealId } = useParams();

  const [singleUpcomingMeal, isLoading] = useSigleUpcomingMeal(mealId);

  const {
    admin,
    image,
    meal_title,
    post_createdAt,
    post_updatedAt,
    price,
    distributor_name,
    meal_category,
    meal_subcategory,
    serve_amount,
    prep_time,
    cooking_time,
    total_time,
    short_description,
    meal_ingredients,
    nutrition_facts,
  } = singleUpcomingMeal || {};

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="px-4">
      <Helmet>
        <title>Meal Details</title>
      </Helmet>

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
                Admin Name : {admin?.name}
              </h3>
              <h4>
                <span className="font-semibold">Admin Email</span> :{" "}
                {admin?.email}
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

              {meal_ingredients?.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2">
                  {" "}
                  <FaArrowRight className="text-orange-600" size={18} />
                  {ingredient}
                </li>
              ))}
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
                    {nutrition_facts?.calories}
                  </h4>
                  <p className="text-slate-900 dark:text-slate-300">Calories</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-slate-300">
                    {nutrition_facts?.fats}
                  </h4>
                  <p className="text-slate-900 dark:text-slate-300">Fat</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-slate-300">
                    {nutrition_facts?.carbs}
                  </h4>
                  <p className="text-slate-900 dark:text-slate-300">Carbs</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-medium text-slate-900 dark:text-slate-300">
                    {nutrition_facts?.protein}
                  </h4>
                  <p className="text-slate-900 dark:text-slate-300">Protein</p>
                </div>
              </div>
            </div>
          </div>

          {/* People are viewing this right now */}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMealsDetails;
