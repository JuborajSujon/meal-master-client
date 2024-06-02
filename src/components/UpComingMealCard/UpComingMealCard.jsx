import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function UpComingMealCard() {
  return (
    <div className="group rounded-lg bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden  m-3 flex flex-col max-w-sm">
      <div className="relative h-64">
        <img
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
          src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>

      <div className="p-6 flex-grow  flex flex-col justify-between">
        <div className="pb-4">
          <h3
            className="text-xl font-medium text-slate-900
                 dark:text-slate-200 dark:hover:text-orange-500">
            Product Name
          </h3>

          <h4 className="dark:text-slate-300">Category: Breakfast</h4>
        </div>

        <div>
          <p className=" dark:text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            rerum autem dicta, exercitationem a maxime.
          </p>
        </div>
        <ul className=" flex justify-between items-center list-none">
          <li>
            <p className="text-lg dark:text-slate-300 font-medium">
              <span className="text-slate-400 dark:text-slate-300 mr-2">
                Price:
              </span>
              $<span className="">10</span>
            </p>
          </li>

          <li>
            <ul className="text-lg font-medium  list-none">
              <li className=" dark:text-slate-300 flex items-center">
                <span className="text-slate-400 text-xl mr-2">0</span>
                <button>
                  <AiFillLike className="inline" size={22} />
                </button>
              </li>
            </ul>
          </li>
        </ul>

        <div className=" mt-4">
          <Link
            // to={`/meal/${_id}`}
            className="btn text-base bg-orange-400 hover:bg-orange-500 border-orange-400 hover:orange-yellow-500 text-slate-900 rounded-md ">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
