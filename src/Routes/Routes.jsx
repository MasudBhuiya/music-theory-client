import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Ligin/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);