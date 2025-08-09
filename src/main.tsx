import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import CategoryProvider from "./providers/CategoryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </StrictMode>
);
