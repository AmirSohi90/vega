import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { startMocks } from "./mocks/start";
import { router } from "./router";
import { AppProvider } from "./AppProvider";

startMocks().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </StrictMode>
  );
});
