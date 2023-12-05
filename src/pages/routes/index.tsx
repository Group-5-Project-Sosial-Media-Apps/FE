import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../home";
import Login from "../auth";
import Detail from "../detail";
import ProtectedRoutes from "./protected-routes";

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
          path: "/detail",
          element: <Detail />,
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
