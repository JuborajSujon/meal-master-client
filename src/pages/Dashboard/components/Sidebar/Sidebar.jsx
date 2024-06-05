import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { MdFormatListBulletedAdd, MdManageAccounts } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import { GiCook } from "react-icons/gi";
import { GiCampCookingPot } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";
import logo from "../../../../assets/logo.png";
import PropTypes from "prop-types";

const Sidebar = ({ handleToggle, isActive }) => {
  const { userSignOut, setUser, user } = useAuth();
  const navigate = useNavigate();

  // Logout Handler
  const handleLogout = async () => {
    try {
      await userSignOut();
      setUser(null);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {/* Sidebar */}
      <div
        className={`z-20 min-h-screen flex flex-col justify-between overflow-x-hidden border-r border-gray-200 bg-slate-200 dark:bg-slate-800 w-64 space-y-6 px-2 py-3 absolute md:fixed md:top-0 md:left-0 inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0 transition duration-200 ease-in-out`}>
        <div>
          <div className="flex justify-between border-b border-gray-200  pb-4">
            <div className="md:flex md:w-full px-4 py-2 shadow-lg rounded-lg justify-start items-center bg-slate-800">
              <Link to="/dashboard">
                <img
                  // className='hidden md:block'
                  src={logo}
                  alt="logo"
                  width="130"
                  height="100"
                />
              </Link>
            </div>
            <button
              onClick={handleToggle}
              className="btn btn-circle btn-sm md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1">
            {/*  Menu Items */}
            {user && (
              <nav>
                <NavLink
                  to="/dashboard"
                  end
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-2 transition-colors duration-300 transform hover:bg-orange-100 rounded-md hover:text-gray-700  dark:text-slate-300 ${
                      isActive
                        ? "border-l-8 bg-orange-100 border-l-orange-400 dark:text-slate-700 rounded-md"
                        : "text-gray-700"
                    }`
                  }>
                  <FaHome className="w-5 h-5" />

                  <span className="mx-4 font-medium">Dashboard Home</span>
                </NavLink>
                <NavLink
                  to="admin-profile"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-2 transition-colors duration-300 transform hover:bg-orange-100 rounded-md hover:text-gray-700  dark:text-slate-300 ${
                      isActive
                        ? "border-l-8 bg-orange-100 border-l-orange-400 dark:text-slate-700 rounded-md"
                        : "text-gray-700"
                    }`
                  }>
                  <FaUser className="w-5 h-5" />

                  <span className="mx-4 font-medium">Admin Profile</span>
                </NavLink>

                <NavLink
                  to="manage-users"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-2 transition-colors duration-300 transform hover:bg-orange-100 rounded-md hover:text-gray-700  dark:text-slate-300 ${
                      isActive
                        ? "border-l-8 bg-orange-100 border-l-orange-400 dark:text-slate-700 rounded-md"
                        : "text-gray-700"
                    }`
                  }>
                  <MdManageAccounts className="w-6 h-7" />

                  <span className="mx-4 font-medium">Manage Users</span>
                </NavLink>

                <NavLink
                  to="add-meal"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-2 transition-colors duration-300 transform hover:bg-orange-100 rounded-md hover:text-gray-700  dark:text-slate-300 ${
                      isActive
                        ? "border-l-8 bg-orange-100 border-l-orange-400 dark:text-slate-700 rounded-md"
                        : "text-gray-700"
                    }`
                  }>
                  <MdFormatListBulletedAdd className="w-5 h-5" />

                  <span className="mx-4 font-medium">Add Meal</span>
                </NavLink>

                <NavLink
                  to="all-reviews"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-2 transition-colors duration-300 transform hover:bg-orange-100 rounded-md hover:text-gray-700  dark:text-slate-300 ${
                      isActive
                        ? "border-l-8 bg-orange-100 border-l-orange-400 dark:text-slate-700 rounded-md"
                        : "text-gray-700"
                    }`
                  }>
                  <GoCodeReview className="w-5 h-5" />

                  <span className="mx-4 font-medium">All Reviews</span>
                </NavLink>

                <NavLink
                  to="serve-meals"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-2 transition-colors duration-300 transform hover:bg-orange-100 rounded-md hover:text-gray-700  dark:text-slate-300 ${
                      isActive
                        ? "border-l-8 bg-orange-100 border-l-orange-400 dark:text-slate-700 rounded-md"
                        : "text-gray-700"
                    }`
                  }>
                  <GiCook className="w-5 h-5" />

                  <span className="mx-4 font-medium">Serve Meals</span>
                </NavLink>

                <NavLink
                  to="upcoming-meals"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-2 transition-colors duration-300 transform hover:bg-orange-100 rounded-md hover:text-gray-700  dark:text-slate-300 ${
                      isActive
                        ? "border-l-8 bg-orange-100 border-l-orange-400 dark:text-slate-700 rounded-md"
                        : "text-gray-700"
                    }`
                  }>
                  <GiCampCookingPot className="w-5 h-5" />

                  <span className="mx-4 font-medium">Upcoming Meals</span>
                </NavLink>
              </nav>
            )}
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-orange-100 rounded-md hover:text-gray-700 ${
                isActive
                  ? "bg-gray-300 dark:text-slate-300 text-gray-700"
                  : "text-gray-600"
              }`
            }>
            <FcSettings className="w-5 h-5 " />

            <span className="mx-4 dark:text-slate-300 font-medium">
              Profile
            </span>
          </NavLink>
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-orange-100 rounded-md hover:text-gray-700 transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5 dark:text-slate-300" />

            <span className="mx-4 dark:text-slate-300 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  handleToggle: PropTypes.func,
  isActive: PropTypes.bool,
};

export default Sidebar;
