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
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import UpcomingMealsDetails from "../pages/Dashboard/AdminPage/ManageUpcomingMeal/UpcomingMealsDetails";
import Checkout from "../pages/Checkout/Checkout";
import AdminRoute from "./AdminRoute";
import Payment from "../pages/Payment/Payment";

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
        path: "/meal-details/:mealId",
        element: <MealDetails />,
      },
      {
        path: "/subscription",
        element: (
          <PrivateRoute>
            <Subscription />
          </PrivateRoute>
        ),
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
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/:id",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/admin-profile",
        element: (
          <AdminRoute>
            <UserProfile />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-meal",
        element: (
          <AdminRoute>
            <AddMeal />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-meals",
        element: (
          <AdminRoute>
            <AllMeals />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-reviews",
        element: (
          <AdminRoute>
            <AllReviews />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/serve-meals",
        element: (
          <AdminRoute>
            <ServeMeals />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/upcoming-meals",
        element: (
          <AdminRoute>
            <ManageUpcomingMeal />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/upcoming-meal-details/:mealId",
        element: (
          <AdminRoute>
            <UpcomingMealsDetails />
          </AdminRoute>
        ),
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
