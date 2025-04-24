import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Layout } from "../layout/Layout";
import { AboutPage } from "../pages/AboutPage";
import { BlogPage } from "../pages/BlogPage";
import { UserInerPage } from "../pages/UserInerPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ErrorPage } from "../pages/ErrorPage";

export const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Navigate to="users" />,
        },
        {
          path: "/users",
          element: <UsersPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "blog",
          element: <BlogPage />,
        },

        {
          path: "users/:userID",
          element: <UserInerPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={routes} />;
};
