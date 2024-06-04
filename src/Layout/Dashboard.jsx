import { Outlet } from "react-router-dom";
import ThemeController from "../components/ThemeController/ThemeController";
import Sidebar from "../pages/Dashboard/components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen md:flex">
      {/* sider bar */}
      <Sidebar />

      {/* dashboard dynamic content */}
      <div className="flex-1 md:ml-64">
        <div className="px-5">
          <Outlet />
        </div>
      </div>
      <ThemeController />
    </div>
  );
};

export default Dashboard;
