import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { MainPage } from "../pages/MainPage";
import { AboutPage } from "../pages/AboutPage";
import { BlogPage } from "../pages/BlogPage";
import { UsersPage } from "../pages/UsersPage";
import { UserInerPage } from "../pages/UserInerPage";
import { ErrorPage } from "../pages/ErrorPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
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
        path: "users/*",
        element: <UsersPage />,
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
