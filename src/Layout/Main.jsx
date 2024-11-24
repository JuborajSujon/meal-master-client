import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import ThemeController from "../components/ThemeController/ThemeController";

export default function Main() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="dark:bg-slate-800 min-h-[calc(100vh-110px)] overflow-x-hidden text-white">
        <Outlet />
        <ThemeController />
      </div>

      <Footer />
    </div>
  );
}
