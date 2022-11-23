import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:"/home",
    element:<Home />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <Login />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
