import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaSearch } from "react-icons/fa";

export default function ManageUsers() {
  return (
    <div>
      <Helmet>
        <title>Add Meal | Dashboard</title>
      </Helmet>
      <div className="py-2">
        <Breadcrumbs />
      </div>
      <div>
        <SectionTitle title="Manage All Users" />
      </div>
      <div className="bg-orange-50 dark:bg-slate-800 p-4 rounded">
        <div>
          {/* search */}
          <div className="relative w-full px-4 mb-3">
            <input
              type="text"
              name="search"
              className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Search by user name or email"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-7 ">
              <FaSearch />
            </div>
          </div>

          {/* table */}
          <div>
            <div className=" p-2 sm:p-4 text-gray-800">
              <div className="overflow-x-auto">
                <table className="min-w-full text-base">
                  <thead className="bg-gray-300">
                    <tr className="text-left">
                      <th className="p-3">User Name</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">User Type</th>
                      <th className="p-3">Subcription</th>
                      <th className="p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                      <td className="p-3">
                        <p>John Doe</p>
                      </td>
                      <td className="p-3">
                        <p>3GKpS@example.com</p>
                      </td>
                      <td className="p-3">
                        <span className="px-3 py-1 font-semibold rounded-md bg-green-600/50 ">
                          verified
                        </span>
                      </td>
                      <td className="p-3">
                        <p className="text-gray-600">Bronze</p>
                      </td>
                      <td className="p-3">
                        <button className="px-3 py-1 font-semibold rounded-md bg-amber-600 text-gray-50">
                          Make An Admin
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
}
