import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaSearch } from "react-icons/fa";

const ServeMeals = () => {
  return (
    <div>
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
                    <th className="p-3">User Email</th>
                    <th className="p-3">User Name</th>
                    <th className="p-3">Meal Request</th>
                    <th className="p-3 ">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                    <td className="p-3">
                      <p>Meal Name</p>
                    </td>
                    <td className="p-3">
                      <p>Email@email.com</p>
                    </td>
                    <td className="p-3">
                      <p>User Name</p>
                    </td>
                    <td className="p-3">
                      <p className="px-3 py-1 font-semibold rounded-md bg-blue-200 inline-block ">
                        Pending
                      </p>
                    </td>

                    <td className="p-3">
                      <button className="px-3 py-1 font-semibold rounded-md bg-amber-600 text-gray-50">
                        Serve
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
  );
};

export default ServeMeals;