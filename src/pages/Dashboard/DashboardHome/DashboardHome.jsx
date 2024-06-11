import { Helmet } from "react-helmet-async";
import useUser from "../../../hooks/useUser";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const DashboardHome = () => {
  const [userData] = useUser();
  console.log(userData?.role);
  return (
    <div>
      <Helmet>
        <title>{`Payment History | ${
          userData?.role === "admin" ? "Admin" : "User"
        } Dashboard`}</title>
      </Helmet>
      <div className="py-2">
        <Breadcrumbs />
      </div>
      <div>
        <SectionTitle
          title={
            userData?.role === "admin" ? "Admin Dashboard" : "User Dashboard"
          }
        />
      </div>
    </div>
  );
};

export default DashboardHome;
