import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Loading from "../../../../components/Loading/Loading";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";

function RequestedMeals() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: sortCarts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sortCarts", currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/carts-sort?page=${currentPage}&size=${itemsPerPage}&email=${user?.email}`
      );
      return res.data;
    },
  });

  const numberOfPages = Math.ceil(sortCarts.count / itemsPerPage);

  let pages = [];
  if (!isLoading) {
    pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);
  } else {
    pages = Array.from({ length: 1 }, (_, index) => index + 1);
  }

  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  const handleDeleteCart = async (id, refetch) => {
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
          const res = await axiosSecure.delete(`/carts/${id}`);

          if (res.data.deletedCount > 0) {
            toast.success("Meal deleted successfully from cart", {
              autoClose: 1500,
            });
            refetch();
          }
        }
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="h-full relative">
      <Helmet>
        <title>Requested Meals | Dashboard</title>
      </Helmet>
      <div className="py-2">
        <Breadcrumbs />
      </div>
      <div>
        <SectionTitle title="Requested Meals" />
      </div>

      {isLoading && <Loading />}

      {/* table */}
      <div className="bg-orange-50 dark:bg-slate-800 p-4 rounded-md">
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
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
                  <th className="p-3">
                    <p>Likes</p>
                  </th>
                  <th className="p-3">
                    <p>Reviews</p>
                  </th>
                  <th className="p-3">Status</th>
                  <th className="p-3 ">Action</th>
                </tr>
              </thead>
              <tbody>
                {sortCarts?.result?.map((cart) => (
                  <tr
                    key={cart._id}
                    className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                    <td className="p-3">
                      <p>{cart?.menu?.meal_title}</p>
                    </td>
                    <td className="p-3">
                      <p>{cart?.menu?.likes_count || 0}</p>
                    </td>
                    <td className="p-3">
                      <p>{cart?.menu?.reviews_count || 0}</p>
                    </td>
                    <td className="p-3">
                      <p>{cart?.req_status}</p>
                    </td>

                    <td className="p-3 flex items-center gap-2">
                      <button
                        onClick={() => handleDeleteCart(cart._id, refetch)}
                        data-tip="Cancel Order"
                        className="px-3 py-1 tooltip rounded-md bg-red-600 text-gray-50">
                        Cancel Order
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
}

export default RequestedMeals;
