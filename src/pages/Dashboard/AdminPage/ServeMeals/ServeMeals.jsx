import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ServeMeals = () => {
  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [allCarts, setAllCarts] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getData = async () => {
      const res = await axiosSecure.get(
        `/all-carts?page=${currentPage}&size=${itemsPerPage}&search=${search}`
      );

      setAllCarts(res.data);
      setLoading(false);
    };

    getData();
  }, [axiosSecure, currentPage, itemsPerPage, search, searchText, isUpdate]);

  const numberOfPages = Math.ceil(allCarts.count / itemsPerPage);

  let pages = [];
  if (!loading) {
    pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);
  } else {
    pages = Array.from({ length: 1 }, (_, index) => index + 1);
  }

  //  handle pagination button
  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
    setCurrentPage(1);
  };

  // handle request status
  const handleDelivery = async (id) => {
    if (!id) return;

    // make delivey
    try {
      const res = await axiosSecure.patch(`/all-carts/${id}`, {
        req_status: "delivery",
      });
      if (res.data.modifiedCount) {
        setIsUpdate(!isUpdate);
        toast.success("Delivery successful", {
          autoClose: 1500,
        });
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="relative h-full">
      <Helmet>
        <title>Serve Meals | Dashboard</title>
      </Helmet>
      <div className="py-2">
        <Breadcrumbs />
      </div>
      <div>
        <SectionTitle title="Serve All Meals" />
      </div>
      <div className="bg-orange-50 dark:bg-slate-800 p-4 rounded">
        <div>
          {/* search */}
          <form onSubmit={handleSearch}>
            <div className="relative w-full px-4 mb-3">
              <input
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                name="search"
                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Search by user name or email"
              />
              <div className="absolute top-1/2 -translate-y-1/2 right-7 ">
                <button type="submit">
                  <FaSearch />
                </button>
              </div>
            </div>
          </form>

          {/* table */}
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
                    <th className="p-3">Price</th>
                    <th className="p-3">User Email</th>
                    <th className="p-3">User Name</th>
                    <th className="p-3">Meal Request</th>
                    <th className="p-3 ">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* if cart is empty */}
                  {allCarts?.count === 0 && (
                    <tr>
                      <td className="p-3" colSpan={6}>
                        <p className="text-center">No data found</p>
                      </td>
                    </tr>
                  )}

                  {/* table data */}
                  {allCarts?.result?.map((cart) => (
                    <tr
                      key={cart._id}
                      className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                      <td className="p-3">
                        <p>{cart.meal_title}</p>
                      </td>
                      <td className="p-3">
                        <p>{cart.price}</p>
                      </td>
                      <td className="p-3">
                        <p>{cart.email}</p>
                      </td>
                      <td className="p-3">
                        <p>{cart.user_name}</p>
                      </td>
                      <td className="p-3">
                        <p
                          className={`px-3 py-1 font-semibold rounded-md ${
                            cart.req_status === "pending"
                              ? "bg-blue-200 text-slate-900"
                              : "bg-green-500 text-gray-50"
                          }  inline-block`}>
                          {cart.req_status}
                        </p>
                      </td>

                      <td className="p-3">
                        <button
                          onClick={() => handleDelivery(cart._id)}
                          className="px-3 py-1 font-semibold rounded-md bg-amber-600 text-gray-50">
                          Serve
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* pagination */}

      <div className="flex fixed bottom-5 left-0 right-0 items-center justify-center mt-10">
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

export default ServeMeals;
