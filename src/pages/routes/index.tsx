import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../home";
import Login from "../auth";
import Detail from "../detail";
import ProtectedRoutes from "./protected-routes";
import Profile from "../profile";

export default function Routes() {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: `/detail/:postId`,
          element: <Detail />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "*",
          element: <div>404 page not found</div>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
