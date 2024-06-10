import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import UpcomingModal from "./UpcomingModal";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../../components/Loading/Loading";
import { Link } from "react-router-dom";

const ManageUpcomingMeal = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortLikes, setSortLikes] = useState(false);
  // Default to descending order
  const [sortOrder, setSortOrder] = useState("desc");
  const axiosSecure = useAxiosSecure();

  const {
    data: sortUpcomingMeals = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sortUpcomingMeals", sortOrder, currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/upcoming-meals-sort?sortOrder=${sortOrder}&page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data;
    },
  });

  const numberOfPages = Math.ceil(sortUpcomingMeals.count / itemsPerPage);

  let pages = [];
  if (!isLoading) {
    pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);
  } else {
    pages = Array.from({ length: 1 }, (_, index) => index + 1);
  }

  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  const handleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    setSortLikes(!sortLikes);
    refetch();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="h-full relative">
      <Helmet>
        <title>Upcoming Meals | Dashboard</title>
      </Helmet>
      <div className="py-2">
        <Breadcrumbs />
      </div>
      <div className="flex items-center justify-between">
        <SectionTitle title="Upcoming Meals" />
        <div>
          <div>
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn btn-sm btn-warning">
              Add Upcoming Meal
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box rounded-md w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                <UpcomingModal />
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Modal  */}

      {/* Table */}
      <div className="bg-orange-50 dark:bg-slate-800 p-4 rounded-md">
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">Meal Name</th>
                  <th onClick={handleSortOrder} className="p-3 cursor-pointer">
                    <p className="flex items-center gap-2">
                      Likes
                      {sortLikes ? (
                        <IoIosArrowUp size={16} />
                      ) : (
                        <IoIosArrowDown size={16} />
                      )}
                    </p>
                  </th>
                  <th className="p-3">
                    <p>Price</p>
                  </th>
                  <th className="p-3">Distributor</th>
                  <th className="p-3 ">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* isloading*/}
                {isLoading && <p>No Upcoming Meal</p>}

                {sortUpcomingMeals?.result?.map((upcomingMeal) => (
                  <tr
                    key={upcomingMeal._id}
                    className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                    <td className="p-3">
                      <p>{upcomingMeal.meal_title}</p>
                    </td>
                    <td className="p-3">
                      <p>{upcomingMeal.likes_count}</p>
                    </td>
                    <td className="p-3">
                      <p>{upcomingMeal.price}</p>
                    </td>
                    <td className="p-3">
                      <p>{upcomingMeal.distributor_name}</p>
                    </td>

                    <td className="p-3 flex items-center gap-3">
                      <button className="px-3 py-1 rounded-md bg-amber-600 text-gray-50">
                        Publish
                      </button>
                      <Link to={`/upcoming-meal-details/${upcomingMeal._id}`}>
                        <button className="px-3 py-1 rounded-md text-nowrap bg-green-600 text-gray-50">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* pagination */}

      <div className="flex absolute bottom-0 left-0 right-0 items-center justify-center mt-10">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 capitalize bg-orange-400 text-slate-900 font-semibold rounded-md cursor-not-allowed hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {/* Numbers */}
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum
                ? "bg-blue-500 text-white"
                : "bg-orange-400"
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}>
            {btnNum}
          </button>
        ))}

        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 text-slate-900 font-semibold transition-colors duration-300 transform bg-orange-400 rounded-md  hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 pr-7">
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ManageUpcomingMeal;
