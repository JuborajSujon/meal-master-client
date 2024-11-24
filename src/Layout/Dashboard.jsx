import { Outlet } from "react-router-dom";
import ThemeController from "../components/ThemeController/ThemeController";
import Sidebar from "../pages/Dashboard/components/Sidebar/Sidebar";
import { useState } from "react";
import DashboardNav from "../pages/Dashboard/components/DashboardNav/DashboardNav";

const Dashboard = () => {
  const [isActive, setActive] = useState(false);
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="h-screen flex max-w-[1540px] mx-auto font-poppins bg-white dark:bg-slate-900">
      {/* sider bar */}
      <div className="relative">
        <Sidebar handleToggle={handleToggle} isActive={isActive} />
      </div>

      {/* dashboard dynamic content */}
      <div className="flex flex-col flex-grow overflow-hidden ">
        {/* navbar */}
        <DashboardNav handleToggle={handleToggle} isActive={isActive} />
        <div className="flex-grow p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
      <ThemeController />
    </div>
  );
};

export default Dashboard;
