import { Link } from "react-router-dom";
import FooterLink from "../../../components/FooterLink/FooterLink";
import Subscribe from "../../../components/Subscribe/Subscribe";

export default function Footer() {
  return (
    <div>
      <footer className="p-6 dark:bg-gray-100 dark:text-gray-800 text-base">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <FooterLink />
          </div>
          <div className="lg:col-span-2">
            <Subscribe />
          </div>
        </div>

        <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 my-6" />
        <div className="flex items-center justify-center px-6">
          <span className="dark:text-gray-600">
            {new Date().getFullYear()}@ Meal Master. Design with
            <i className="mdi mdi-heart text-red-600"></i> by{" "}
            <Link
              to={"https://github.com/JuborajSujon"}
              target="_blank"
              className="text-reset underline">
              JuborajSujon
            </Link>
            .
          </span>
        </div>
      </footer>
    </div>
  );
}
