import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import Logo from "../../../assets/logo.png";
import useAuth from "./../../../hooks/useAuth";
import useScrollPosition from "./../../../hooks/useScrollPosition";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const { user, userSignOut, setUser, reload } = useAuth();
  const scrollPosition = useScrollPosition();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLogout = () => {
    userSignOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {}, [user, reload]);

  const navList = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-600 px-2 py-1.5 dark:text-white"
              : "hover:text-slate-900  px-2 py-1.5 hover:bg-orange-400 rounded-md dark:text-orange-500 dark:hover:text-slate-900"
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/meals"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-600 px-2 py-1.5 dark:text-white"
              : "hover:text-slate-900 px-2 py-1.5 hover:bg-orange-400 rounded-md dark:text-orange-500 dark:hover:text-slate-900"
          }>
          Meals
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/upcoming-meals"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-600 px-2 py-1.5 dark:text-white"
              : "hover:text-slate-900 px-2 py-1.5 hover:bg-orange-400 rounded-md dark:text-orange-500 dark:hover:text-slate-900"
          }>
          Upcoming Meals
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/upcoming-meals"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-orange-600 px-2 py-1.5 dark:text-white"
                  : "hover:text-slate-900 px-2 py-1.5 hover:bg-orange-400 rounded-md dark:text-orange-500 dark:hover:text-slate-900"
              }>
              Upcoming Meals
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={`navbar max-w-[1540px] fixed z-20 ${
        scrollPosition > 300
          ? "bg-white dark:bg-slate-800"
          : "bg-white/50 dark:bg-slate-800/50"
      } dark:text-slate-300 px-4`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost min-h-9 h-9 px-2  md:hidden hover:bg-orange-400 hover:text-slate-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="2 2 20 20"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
            {navList}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost hover:bg-slate-800 bg-stone-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-bold  min-h-10 h-12 -ml-2 ">
          <img className="w-28" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal text-base font-semibold px-1 space-x-2">
          {navList}
        </ul>
      </div>
      <div className="navbar-end  space-x-2">
        <div>
          <IoIosNotifications
            size={30}
            className="cursor-pointer text-orange-400 dark:text-orange-500  hover:text-orange-700 dark:hover:text-orange-700"
          />
        </div>
        {user ? (
          <div className="relative">
            <div className="flex items-center  gap-1 sm:gap-2">
              <label
                onMouseOver={handleMouseEnter}
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar hover:bg-yellow-500 min-h-8 h-10 w-10  sm:min-h-12 sm:h-12 sm:w-12">
                <div className="w-12 rounded-full">
                  <img
                    className=""
                    src={
                      user?.photoURL || "https://i.ibb.co/Jn1jJHN/avater.png"
                    }
                  />
                </div>
              </label>
            </div>
            {isHovered && (
              <ul
                tabIndex={0}
                onMouseLeave={handleMouseLeave}
                className="menu menu-sm dropdown-content mt-0 -ml-48 z-[1] py-3 px-4 shadow bg-base-100 rounded-md w-64 absolute space-y-2">
                <li className="text-base font-medium">
                  Name : {user?.displayName || "user name not found"}
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    end
                    className="btn btn-ghost border border-orange-400 hover:bg-orange-500 text-sm  font-semibold min-h-8 h-8 px-2 sm:px-4 sm:min-h-10 sm:h-10">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-ghost border border-orange-400 hover:bg-orange-500 text-sm  font-semibold min-h-8 h-8 px-2 sm:px-4 sm:min-h-10 sm:h-10">
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className="flex">
            <Link
              to="/login"
              className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-transparent text-indigo-600 dark:border-white dark:text-white">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-indigo-600 dark:text-orange-500  transition duration-300 group-hover:text-white ease">
                Join Us
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
