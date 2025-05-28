import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
    }}
  >
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
