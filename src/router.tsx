import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/Homepage";
import { LoginPage } from "./pages/LoginPage";
import { AppLayout } from "./components/organisms/AppLayout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);
