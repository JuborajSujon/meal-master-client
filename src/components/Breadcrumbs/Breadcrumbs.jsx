import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./breadcrubsCSS.css";
import { IoIosArrowForward } from "react-icons/io";

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((x) => x !== "")
    .map((crumb, index) => {
      currentLink += `/${crumb}`;
      return (
        <ul
          key={index}
          className="crumb *:text-sm *:text-slate-600 *:dark:text-white">
          <li>
            <Link to={currentLink}>{crumb}</Link>
          </li>
        </ul>
      );
    });

  return (
    <div>
      <div className="flex items-center breadcrumbs bg-slate-300 dark:bg-slate-600 pl-5 rounded text-lg font-medium ">
        <li>
          <Link
            to="/"
            className="flex items-center gap-2 hover:underline text-sm">
            <FaHome className="text-blue-600 dark:text-white" />
            <span className="text-slate-600 dark:text-white">Home</span>
            <IoIosArrowForward
              size={16}
              className="text-slate-600 dark:text-white"
            />
          </Link>
        </li>
        {crumbs}
      </div>
    </div>
  );
}
