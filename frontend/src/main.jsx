import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ClockPage from "./pages/Clock/ClockPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Rounds from "./pages/Rounds/Rounds";
import Programs from "./pages/Programs/Programs";
import Welcome from "./pages/Welcome/Welcome";
import Workout from "./pages/Workout/workout";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      { path: "/login", element: <Login /> },
      { path: "/rounds", element: <Rounds /> },
      { path: "/programs", element: <Programs /> },
      { path: "/clock", element: <ClockPage /> },
      { path: "/home", element: <Home /> },
      { path: "/workout/:id", element: <Workout /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
