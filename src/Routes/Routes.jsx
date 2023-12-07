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
import AddClass from "../pages/Instructor/AddClass/AddClass";
import MyClasses from "../pages/Instructor/MyClass/MyClasses";
import Update from "../pages/Instructor/Update/Update";
import Payment from "../pages/Dashboard/Payment/Payment";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";

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
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
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
          path: 'allusers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'myclasses',
          element: <MyClass></MyClass>
        },
        {
          path: 'addclass',
          element: <AddClass></AddClass>
        },
        {
          path: 'myaddedclass',
          element: <MyClasses></MyClasses>
        },
        {
          path: 'payment/:id',
          element:<Payment></Payment>,
          loader: ({params})=> fetch(`https://assignment-twelve-server-gilt.vercel.app/singleclass/${params.id}`)
          // loader: ({params}) => console.log(params.id)
        },
        {
          path: 'update/:id',
          element: <Update></Update>,
          loader: ({params})=> fetch(`https://assignment-twelve-server-gilt.vercel.app/instructors/${params.id}`)
        }
      ]
    }
  ]);