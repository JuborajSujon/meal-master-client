import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import { Helmet } from "react-helmet-async";

export default function UserProfile() {
  return (
    <div>
      <Helmet>
        <title>Profile | Dashboard</title>
      </Helmet>
      <div className="py-2">
        <Breadcrumbs />
      </div>
      <div>
        <SectionTitle title="Personal Information" />
      </div>

      <div className="flex flex-col justify-center p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800">
        <img
          src="https://source.unsplash.com/150x150/?portrait?3"
          alt=""
          className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">User Name</h2>
            <p className="px-5 text-xs sm:text-base text-gray-600">
              User Email
            </p>
            <p>Number of Meal Added</p>
          </div>
        </div>
      </div>
    </div>
  );
}
