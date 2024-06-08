import { AiOutlineBars } from "react-icons/ai";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../../../assets/logo.png";
import useAuth from "../../../../hooks/useAuth";
import useUser from "../../../../hooks/useUser";
import { MdNotificationsActive } from "react-icons/md";

const DashboardNav = ({ handleToggle }) => {
  const { userSignOut, setUser } = useAuth();
  const navigate = useNavigate();
  const [userData] = useUser();

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
    <div className="sticky top-0 left-0 right-0 z-10 w-full bg-slate-50 dark:bg-slate-700 border-b border-gray-200">
      {/* Small Screen Navbar */}
      <div className=" dark:bg-slate-700 text-gray-800 flex justify-between">
        {/* Humburger and Logo */}
        <div className="flex items-center md:hidden">
          <button
            onClick={handleToggle}
            className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200">
            <AiOutlineBars className="h-5 w-5 dark:text-slate-300" />
          </button>
          <div className="block cursor-pointer font-bold">
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
        </div>

        {/* Navbar */}
        <div className="flex-1 dark:bg-slate-700">
          <div className="navbar ">
            {/* Search Bar input field */}
            <div className="flex-1">
              <label className="input input-bordered md:flex items-center gap-2 hidden">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>

            {/* Right Side */}
            <div className="flex-none space-x-3">
              {/* Add to Cart Page */}
              <div className="indicator">
                <PiShoppingCartBold size={24} />

                <span className="badge badge-sm indicator-item dark:text-blue-500 dark:bg-white text-base">
                  8
                </span>
              </div>

              {/* Notification Dropdown */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <MdNotificationsActive size={24} />

                    <span className="badge badge-sm indicator-item dark:text-blue-500 dark:bg-white text-base">
                      8
                    </span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-64 bg-base-100 dark:bg-slate-700 shadow rounded-md">
                  <div className="card-body">
                    <span className="font-bold dark:text-slate-300 text-lg">
                      8 info
                    </span>
                    <span className="text-info"></span>
                  </div>
                </div>
              </div>

              {/* User Profile menu with Dropdown */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center justify-start ">
                  <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={userData?.photo}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{userData?.name}</p>
                    <small>{userData?.badge}</small>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md dark:bg-slate-700 dark:text-slate-300 w-64">
                  <li>
                    <Link to="/" className="hover:bg-orange-100 rounded-md">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/user-profile"
                      className="hover:bg-orange-100 rounded-md">
                      Profile
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={handleLogout}
                      className="hover:bg-orange-100 rounded-md">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardNav.propTypes = {
  handleToggle: PropTypes.func,
  isActive: PropTypes.bool,
};

export default DashboardNav;
