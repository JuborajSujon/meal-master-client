import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";
import { BiSolidDetail } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const AllMeals = () => {
  const [sortLikes, setSortLikes] = useState(false);
  const [sortReviews, setSortReviews] = useState(false);

  const handleSortLikes = () => {
    setSortLikes(!sortLikes);
  };
  const handleSortReviews = () => {
    setSortReviews(!sortReviews);
  };
  return (
    <div>
      <Helmet>
        <title>All Meals | Dashboard</title>
      </Helmet>
      <div className="py-2">
        <Breadcrumbs />
      </div>
      <div>
        <SectionTitle title="Manage All Meals" />
      </div>
      <div className="bg-orange-50 dark:bg-slate-800 p-4 rounded-md">
        <div>
          {/* table */}
          <div>
            <div className=" p-2 sm:p-4 text-gray-800">
              <div className="overflow-x-auto">
                <table className="min-w-full overflow-auto text-base ">
                  <thead className="bg-gray-300">
                    <tr className="text-left">
                      <th className="p-3">Meal Title</th>
                      <th onClick={handleSortLikes} className="p-3 text-nowrap">
                        Likes
                        {sortLikes ? (
                          <IoIosArrowUp size={22} className="inline ml-2" />
                        ) : (
                          <IoIosArrowDown size={22} className="inline ml-2" />
                        )}
                        <button></button>
                      </th>
                      <th
                        onClick={handleSortReviews}
                        className="p-3 text-nowrap">
                        Reviews
                        {sortReviews ? (
                          <IoIosArrowUp size={22} className="inline ml-2" />
                        ) : (
                          <IoIosArrowDown size={22} className="inline ml-2" />
                        )}
                      </th>
                      <th className="p-3 text-nowrap">Distributor Name</th>
                      <th className="p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                      <td className="p-3 text-nowrap">
                        <p>Crispy Chicken and Rice</p>
                      </td>
                      <td className="p-3">
                        <p>200</p>
                      </td>
                      <td className="p-3">
                        <p>300</p>
                      </td>
                      <td className="p-3">
                        <p className="text-gray-600 text-nowrap">Mr. XYZ</p>
                      </td>
                      <td className="p-3 flex items-center gap-2">
                        <button
                          data-tip="View Meal"
                          className="px-3 py-2  rounded-md bg-green-600 text-gray-50  tooltip ">
                          <BiSolidDetail size={24} />
                        </button>
                        <button
                          data-tip="View Meal"
                          className="px-3 py-2  rounded-md bg-amber-600 text-blue-500  tooltip ">
                          <FaEdit size={24} />
                        </button>
                        <button
                          data-tip="View Meal"
                          className="px-3 py-2  rounded-md bg-red-600 text-white  tooltip ">
                          <MdDeleteForever size={24} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMeals;
