import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/meals",
        element: <div>meals</div>,
      },
      {
        path: "/upcoming-meals",
        element: <div>upcoming-meals</div>,
      },
    ],
  },
]);
