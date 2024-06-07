import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import MealDetails from "../pages/MealDetails/MealDetails";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import Subscription from "../pages/Subscription/Subscription";
import Meals from "../pages/Meals/Meals";
import UpComingMeals from "../pages/UpComingMeals/UpComingMeals";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AddMeal from "../pages/Dashboard/AdminPage/AddMeal/AddMeal";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import ManageUsers from "../pages/Dashboard/AdminPage/ManageUsers/ManageUsers";
import AllMeals from "../pages/Dashboard/AdminPage/AllMeals/AllMeals";
import AllReviews from "../pages/Dashboard/AdminPage/AllReviews/AllReviews";
import ServeMeals from "../pages/Dashboard/AdminPage/ServeMeals/ServeMeals";
import ManageUpcomingMeal from "./../pages/Dashboard/AdminPage/ManageUpcomingMeal/ManageUpcomingMeal";
import RequestedMeals from "../pages/Dashboard/UserPage/RequestedMeals/RequestedMeals";
import UserReviews from "../pages/Dashboard/UserPage/UserReviews/UserReviews";
import PaymentHistory from "../pages/Dashboard/UserPage/PaymentHistory/PaymentHistory";

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
        element: <UpComingMeals />,
      },
      {
        path: "/meal-details",
        element: <MealDetails />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <div>secret</div>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <div>Dashboard</div>,
      },
      {
        path: "/dashboard/admin-profile",
        element: <UserProfile />,
      },
      {
        path: "/dashboard/manage-users",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/add-meal",
        element: <AddMeal />,
      },
      {
        path: "/dashboard/all-meals",
        element: <AllMeals />,
      },
      {
        path: "/dashboard/all-reviews",
        element: <AllReviews />,
      },
      {
        path: "/dashboard/serve-meals",
        element: <ServeMeals />,
      },
      {
        path: "/dashboard/upcoming-meals",
        element: <ManageUpcomingMeal />,
      },
      {
        path: "/dashboard/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/dashboard/requested-meals",
        element: <RequestedMeals />,
      },
      {
        path: "/dashboard/user-reviews",
        element: <UserReviews />,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory />,
      },
    ],
  },
]);
