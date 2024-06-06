import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { BiSolidDetail } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

function AllReviews() {
  return (
    <div>
      <Helmet>
        <title>All Reviews | Dashboard</title>
      </Helmet>
      <div className="py-2">
        <Breadcrumbs />
      </div>
      <div>
        <SectionTitle title="Manage All Reviews" />
      </div>
      <div className="bg-orange-50 dark:text-slate-800 dark:bg-slate-800 p-4 rounded-md">
        {/* table */}
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col className="min-w-96" />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">Review</th>
                  <th className="p-3">Meal Name</th>
                  <th className="p-3">Like</th>
                  <th className="p-3">Review count</th>
                  <th className="p-3 ">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                  <td className="p-3">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit maiores soluta error et aliquid dolor obcaecati
                      debitis placeat, deserunt ducimus.
                    </p>
                  </td>
                  <td className="p-3">
                    <p>Meal Name</p>
                  </td>
                  <td className="p-3">
                    <p>200</p>
                  </td>
                  <td className="p-3">
                    <p>200</p>
                  </td>

                  <td className="p-3 flex items-center gap-2">
                    <button
                      data-tip="Meal View"
                      className="px-3 py-1 tooltip rounded-md bg-amber-600 text-gray-50">
                      <BiSolidDetail size={16} />
                    </button>

                    <button
                      data-tip="Delete"
                      className="px-3 py-1 tooltip rounded-md bg-red-600 text-gray-50">
                      <MdDeleteForever size={16} />
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

export default AllReviews;
