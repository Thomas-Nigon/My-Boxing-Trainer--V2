import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Clock from "./pages/Clock/ClockPage";
import Homepage from "./pages/Welcome/Welcome";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Rounds from "./pages/Rounds/Rounds";
import Programs from "./pages/Programs/Programs";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      { path: "/login", element: <Login /> },
      { path: "/rounds", element: <Rounds /> },
      { path: "/programs", element: <Programs /> },
      { path: "/clock", element: <Clock /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
