import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MealCard({ item }) {
  const { _id, meal_title, meal_category, price, image, rating } = item;
  return (
    <div className="group rounded-lg bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden  m-3 flex flex-col max-w-sm">
      <div className="relative h-64">
        <img
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
          src={image}
          alt={meal_title}
        />
      </div>

      <div className="p-6 flex-grow  flex flex-col justify-between">
        <div className="pb-4">
          <h3
            className="text-xl font-medium text-slate-900
                 dark:text-slate-200 dark:hover:text-orange-500">
            {meal_title}
          </h3>
          <p>
            <span className="font-semibold">Category : </span>
            {meal_category}
          </p>
        </div>
        <ul className=" flex justify-between items-center list-none">
          <li>
            <p className="text-lg dark:text-slate-300 font-medium">
              <span className="text-slate-400 dark:text-slate-300 mr-2">
                Price:
              </span>
              $<span className="font-chakraPetch">{price}</span>
            </p>
          </li>

          <li>
            <ul className="text-lg font-medium  list-none">
              <li
                className="inline text-slate-900 
              dark:text-slate-300 ">
                <span className="text-slate-400 mr-2">Rating:</span>
                <span className="font-chakraPetch">{rating?.average}</span>
              </li>
            </ul>
          </li>
        </ul>

        <div className=" mt-4">
          <Link
            to={`/meal-details/${_id}`}
            className="btn text-base bg-orange-400 hover:bg-orange-500 border-orange-400 hover:orange-yellow-500 text-slate-900 rounded-md ">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

MealCard.propTypes = {
  item: PropTypes.object,
};
