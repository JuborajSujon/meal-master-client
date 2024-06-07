import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import UpcomingModal from "./UpcomingModal";

const ManageUpcomingMeal = () => {
  const [sortLikes, setSortLikes] = useState(false);

  const handleSortLikes = () => {
    setSortLikes(!sortLikes);
  };

  return (
    <div>
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
                  <th onClick={handleSortLikes} className="p-3 ">
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
                <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                  <td className="p-3">
                    <p>Meal Name</p>
                  </td>
                  <td className="p-3">
                    <p>200</p>
                  </td>
                  <td className="p-3">
                    <p>200</p>
                  </td>
                  <td className="p-3">
                    <p>Meal Master</p>
                  </td>

                  <td className="p-3 flex items-center gap-3">
                    <button className="px-3 py-1 rounded-md bg-amber-600 text-gray-50">
                      Publish
                    </button>
                    <button className="px-3 py-1 rounded-md bg-green-600 text-gray-50">
                      View Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUpcomingMeal;
