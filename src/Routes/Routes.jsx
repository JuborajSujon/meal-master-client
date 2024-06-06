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
        element: <div>All Reviews</div>,
      },
      {
        path: "/dashboard/serve-meals",
        element: <div>Serve Meals</div>,
      },
      {
        path: "/dashboard/upcoming-meals",
        element: <div>Upcoming Meals</div>,
      },
    ],
  },
]);
