import { Outlet } from "react-router-dom";
import ThemeController from "../components/ThemeController/ThemeController";
import Sidebar from "../pages/Dashboard/components/Sidebar/Sidebar";
import { useState } from "react";
import DashboardNav from "../pages/Dashboard/components/DashboardNav/DashboardNav";

const Dashboard = () => {
  const [isActive, setActive] = useState(true);
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="min-h-screen md:flex justify-start font-poppins">
      {/* sider bar */}
      <div>
        <Sidebar handleToggle={handleToggle} isActive={isActive} />
      </div>

      {/* dashboard dynamic content */}
      <div className="flex-1 mt-16 md:ml-64">
        {/* navbar */}
        <DashboardNav handleToggle={handleToggle} isActive={isActive} />
        <div className="px-5">
          <Outlet />
        </div>
      </div>
      <ThemeController />
    </div>
  );
};

export default Dashboard;
