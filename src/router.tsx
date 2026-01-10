import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "./pages/Homepage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },

  { path: "*", element: <Navigate to="/" replace /> },
]);