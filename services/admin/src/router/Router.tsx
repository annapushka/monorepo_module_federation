import { App } from "@/components/App";
import { About } from "@/pages/About";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
          path: "/about",
          element: <Suspense fallback='Loading...'><About /></Suspense>,
      }
    ],
  },
]

export const router = createBrowserRouter(routes);

export default routes;
