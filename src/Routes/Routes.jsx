import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Ligin/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: 'login',
          element: <Login></Login>
        }
      ]
    },
  ]);