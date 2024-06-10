import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

export default function UpComingMealCard({ upcomingMeal, userData, refetch }) {
  const [liked, setLiked] = useState(false);
  const [like, setLike] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { _id: userId, name, email, photo, badge } = userData;

  const {
    _id,
    meal_title,
    image,
    price,
    meal_category,
    meal_subcategory,
    short_description,
    likes_count,
  } = upcomingMeal || {};

  useEffect(() => {
    if (!userData?.badge === "bronze") setLike(true);
  }, [liked, userData?.badge]);

  // handle like button
  const handleLike = async () => {
    setLiked(!liked);

    try {
      const likeObj = {
        meal_id: _id,
        user_id: userId,
        name: name,
        email: email,
        photo: photo,
        liked: liked,
        created_time: new Date().toISOString(),
      };

      const result = await axiosSecure.post(`/upcoming-like`, likeObj);

      if (result.data.acknowledged) {
        refetch();
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="group rounded-lg bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden  m-3 flex flex-col max-w-sm">
      <div className="relative h-64">
        <img
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
          src={image}
          alt=""
        />
      </div>

      <div className="p-6 flex-grow  flex flex-col justify-between">
        <div className="pb-4">
          <h3
            className="text-xl font-medium mb-4 text-slate-900
                 dark:text-slate-200 dark:hover:text-orange-500">
            {meal_title}
          </h3>

          <h4 className="dark:text-slate-300">
            <span className="font-medium">Category:</span> {meal_category}
          </h4>
          <h4 className="dark:text-slate-300">
            <span className="font-medium">Sub-category:</span>{" "}
            {meal_subcategory}
          </h4>
        </div>

        <div>
          <p className=" dark:text-slate-300">
            {short_description.slice(0, 100)} ....
          </p>
        </div>
        <ul className=" flex justify-between items-center list-none">
          <li>
            <p className="text-lg mt-4 dark:text-slate-300 font-medium">
              <span className="text-slate-400 dark:text-slate-300 mr-2">
                Price:
              </span>
              $<span className="">{price}</span>
            </p>
          </li>

          <li>
            <ul className="text-lg font-medium  list-none">
              <li className=" dark:text-slate-300 flex items-center">
                <span className="text-blue-600 text-xl mr-2">
                  {likes_count}
                </span>
                <button disabled={liked} onClick={handleLike}>
                  {like ? "Unlike" : "Like"}
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

UpComingMealCard.propTypes = {
  upcomingMeal: PropTypes.object,
  refetch: PropTypes.func,
};
