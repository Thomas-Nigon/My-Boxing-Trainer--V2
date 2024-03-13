import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ClockPage from "./pages/Clock/ClockPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Rounds from "./pages/Rounds/Rounds";
import Welcome from "./pages/Welcome/Welcome";
import Workout from "./pages/Workout/workout";
import Trainings from "./pages/Trainings/Trainings";
import TrainingSession from "./pages/TrainingSession/TrainingSession";
import EditCustoms from "./pages/EditCustoms/EditCustoms";
import UserPage from "./pages/UserPage/UserPage";

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
      { path: "/trainings", element: <Trainings /> },
      { path: "/clock", element: <ClockPage /> },
      { path: "/home", element: <Home /> },
      { path: "/workout/:id", element: <Workout /> },
      { path: "/training/:id", element: <TrainingSession /> },
      { path: "/edit/:id", element: <EditCustoms /> },
      { path: "/userPage", element: <UserPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
