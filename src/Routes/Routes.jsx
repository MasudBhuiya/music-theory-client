import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Ligin/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home/Home";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyClass from "../pages/MyClass/MyClass";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Register from "../pages/SignUp/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'allinstructors',
          element: <AllInstructors></AllInstructors>
        },
        {
          path: 'allclasses',
          element: <AllClasses></AllClasses>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: 'myclasses',
          element: <MyClass></MyClass>
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);