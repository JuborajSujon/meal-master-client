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
        <div>
          <div className="rounded-md">
            <table className="min-w-full rounded-md overflow-x-auto text-xs">
              <thead className="bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">Review</th>
                  <th className="p-3">Meal Title</th>
                  <th className="p-3">Likes</th>
                  <th className="p-3">Reviews Count</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                  <td className="p-3 ">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem consequuntur nemo deserunt numquam ad
                      veniam qui illo laudantium provident autem.
                    </p>
                  </td>
                  <td className="p-3">
                    <p>Microsoft Corporation Corporation</p>
                  </td>
                  <td className="p-3">
                    <p className="text-gray-600">300</p>
                  </td>
                  <td className="p-3">
                    <p className="text-gray-600">300</p>
                  </td>

                  <td className="p-3 flex items-center gap-2">
                    <button
                      data-tip="View Meal"
                      className="px-3 py-2  rounded-md bg-green-600 text-gray-50  tooltip ">
                      <BiSolidDetail size={20} />
                    </button>

                    <button
                      data-tip="View Meal"
                      className="px-3 py-2  rounded-md bg-red-600 text-white  tooltip ">
                      <MdDeleteForever size={20} />
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                  <td className="p-3 ">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem consequuntur nemo deserunt numquam ad
                      veniam qui illo laudantium provident autem.
                    </p>
                  </td>
                  <td className="p-3">
                    <p>Microsoft Corporation Corporation</p>
                  </td>
                  <td className="p-3">
                    <p className="text-gray-600">300</p>
                  </td>
                  <td className="p-3">
                    <p className="text-gray-600">300</p>
                  </td>

                  <td className="p-3 flex items-center gap-2">
                    <button
                      data-tip="View Meal"
                      className="px-3 py-2  rounded-md bg-green-600 text-gray-50  tooltip ">
                      <BiSolidDetail size={20} />
                    </button>

                    <button
                      data-tip="View Meal"
                      className="px-3 py-2  rounded-md bg-red-600 text-white  tooltip ">
                      <MdDeleteForever size={20} />
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
