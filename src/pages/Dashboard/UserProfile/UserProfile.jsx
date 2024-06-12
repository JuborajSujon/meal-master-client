import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import { Helmet } from "react-helmet-async";
import useUser from "../../../hooks/useUser";
import useMenu from "../../../hooks/useMenu";

export default function UserProfile() {
  const [menu] = useMenu();
  const [userData] = useUser();

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
          src={userData?.photo}
          alt={userData?.name}
          className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {userData?.name}
            </h2>
            <p className="px-5 text-xs sm:text-base text-gray-600">
              User Email: {userData?.email}
            </p>
            {userData.role === "admin" ? (
              <p>Number of Menu Added : {menu?.length}</p>
            ) : (
              <p>Badge : {userData?.badge}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
