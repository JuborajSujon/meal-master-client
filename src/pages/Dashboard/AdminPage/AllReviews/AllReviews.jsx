import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { BiSolidDetail } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../../components/Loading/Loading";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function AllReviews() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const axiosSecure = useAxiosSecure();

  const {
    data: AllReviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["AllReviews", currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/all-reviews?page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data;
    },
  });

  const numberOfPages = Math.ceil(AllReviews.count / itemsPerPage);

  let pages = [];
  if (!isLoading) {
    pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);
  } else {
    pages = Array.from({ length: 1 }, (_, index) => index + 1);
  }

  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  const handleDeleteReview = async (createdAt) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosSecure.delete(`/review/${createdAt}`);
          refetch();

          toast.success("Review deleted successfully", {
            autoClose: 1500,
          });
        }
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="h-full relative">
      <Helmet>
        <title>User Reviews | Dashboard</title>
      </Helmet>
      <div className="py-2">
        <Breadcrumbs />
      </div>
      <div>
        <SectionTitle title="Reviews all Meals" />
      </div>
      <div className="bg-orange-50 dark:bg-slate-800 p-4 rounded-md">
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">Reviews</th>
                  <th className="p-3">Meal Name</th>
                  <th className="p-3">Likes</th>
                  <th className="p-3">Review count</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {AllReviews?.result?.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center p-3">
                      No reviews found
                    </td>
                  </tr>
                )}
                {AllReviews?.result?.map((review, index) => (
                  <tr
                    key={index}
                    className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                    <td className="p-3">
                      <p>{review?.reviews?.review}</p>
                    </td>
                    <td className="p-3">
                      <p>{review?.meal_title}</p>
                    </td>
                    <td className="p-3">
                      <p>{review?.likes_count}</p>
                    </td>
                    <td className="p-3">
                      <p>{review?.rating?.reviewCount}</p>
                    </td>
                    <td className="p-3 flex justify-center items-center gap-2">
                      <Link to={`/meal-details/${review?._id}`}>
                        <button className="px-3 py-1 rounded-md bg-amber-600 text-gray-50">
                          <BiSolidDetail size={16} />
                        </button>
                      </Link>

                      <button
                        onClick={() =>
                          handleDeleteReview(review?.reviews?.created_time)
                        }
                        className="px-3 py-1  rounded-md bg-red-600 text-gray-50">
                        <MdDeleteForever size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* pagination */}

      <div className="flex z-10 fixed bottom-5 left-0 right-0 items-center justify-center mt-10">
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
}

export default AllReviews;
