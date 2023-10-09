import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import EventDetails from "../pages/EventDetails/EventDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/shared/About/About";
import Services from "../pages/shared/Services/Services";
import Contact from "../pages/shared/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/educational.json"),
      },
      {
        path: "/data/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("../educational.json"),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
