import { AiOutlineBars } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../../../assets/logo.png";
import useAuth from "../../../../hooks/useAuth";

const DashboardNav = ({ handleToggle }) => {
  const { userSignOut, setUser } = useAuth();
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
    <div className="sticky top-0 z-10 dark:bg-slate-700 border-b border-gray-200">
      {/* Small Screen Navbar */}
      <div className=" dark:bg-slate-700 text-gray-800 flex justify-between">
        <div className="flex items-center md:hidden">
          <button
            onClick={handleToggle}
            className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200">
            <AiOutlineBars className="h-5 w-5 dark:text-slate-300" />
          </button>
          <div className="block cursor-pointer font-bold">
            <Link to="/">
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
        <div className="flex-1 dark:bg-slate-700">
          <div className="navbar ">
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
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 dark:text-slate-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item dark:text-blue-500 dark:bg-white text-base">
                      8
                    </span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-64 dark:bg-slate-700 bg-base-100 shadow rounded-md">
                  <div className="card-body">
                    <span className="font-bold dark:text-slate-300 text-lg">
                      8 Items
                    </span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 dark:text-slate-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
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
              <div className="dropdown dropdown-end">
                <div className="flex items-center justify-start">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Tailwind CSS</p>
                    <small>Designer</small>
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
                      to="/user-profile"
                      className="hover:bg-orange-100 rounded-md">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/setting"
                      className="hover:bg-orange-100 rounded-md">
                      Settings
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
