import { AiOutlineBars } from "react-icons/ai";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../../../assets/logo.png";
import useAuth from "../../../../hooks/useAuth";
import useUser from "../../../../hooks/useUser";
import useCart from "../../../../hooks/useCart";

const DashboardNav = ({ handleToggle }) => {
  const { userSignOut, setUser } = useAuth();
  const navigate = useNavigate();
  const [userData] = useUser();
  const [carts, isLoading] = useCart();

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
            <div className="flex-1"></div>

            {/* Right Side */}
            <div className="flex-none space-x-4">
              {/* Add to Cart Page */}
              <Link to="/dashboard/requested-meals">
                <div className="indicator">
                  <PiShoppingCartBold
                    className="h-6 w-6 dark:text-slate-300"
                    size={24}
                  />

                  <span className="badge badge-sm indicator-item dark:text-blue-500 dark:bg-white text-base">
                    {isLoading ? "0" : carts?.length}
                  </span>
                </div>
              </Link>

              {/* User Profile menu with Dropdown */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center justify-start ">
                  <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img alt="profile image" src={userData?.photo} />
                    </div>
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-semibold dark:text-slate-300">
                      {userData?.name}
                    </p>
                    <small className="text-xs dark:text-slate-300">
                      {userData?.badge}
                    </small>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-md dark:bg-slate-700 dark:text-slate-300 w-64">
                  <li>
                    <Link
                      to="/"
                      className="hover:bg-orange-100 hover:text-slate-800 rounded-md">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/user-profile"
                      className="hover:bg-orange-100 hover:text-slate-800 rounded-md">
                      Profile
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={handleLogout}
                      className="hover:bg-orange-100 hover:text-slate-800 rounded-md">
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
