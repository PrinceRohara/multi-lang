import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18next";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
