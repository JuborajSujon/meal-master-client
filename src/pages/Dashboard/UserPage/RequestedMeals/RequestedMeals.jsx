import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

function RequestedMeals() {
  return (
    <div>
      <Helmet>
        <title>Requested Meals | Dashboard</title>
      </Helmet>
      <div className="py-2">
        <Breadcrumbs />
      </div>
      <div>
        <SectionTitle title="Requested Meals" />
      </div>
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
                    <p>Pending</p>
                  </td>

                  <td className="p-3 flex items-center gap-2">
                    <button
                      data-tip="Cen"
                      className="px-3 py-1 tooltip rounded-md bg-red-600 text-gray-50">
                      Cancel Order
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
}

export default RequestedMeals;
