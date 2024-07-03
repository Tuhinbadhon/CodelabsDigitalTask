import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayouts";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
