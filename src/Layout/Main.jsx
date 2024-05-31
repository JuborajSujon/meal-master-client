import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

export default function Main() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}
