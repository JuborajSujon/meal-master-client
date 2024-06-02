import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import MealDetails from "../pages/MealDetails/MealDetails";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import Subscription from "../pages/Subscription/Subscription";
import Meals from "../pages/Meals/Meals";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/meals",
        element: <Meals />,
      },
      {
        path: "/upcoming-meals",
        element: <div>upcoming-meals</div>,
      },
      {
        path: "/meal-details",
        element: <MealDetails />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },
    ],
  },
]);
