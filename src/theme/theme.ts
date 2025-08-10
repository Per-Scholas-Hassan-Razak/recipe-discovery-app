import { createTheme } from "@mui/material/styles";
import type { ColorMode } from "../types";

export const getTokens = (mode: ColorMode) => ({
  palette: {
    mode,
    primary: { main: "#32475dff" },
    background:
      mode === "light"
        ? { default: "#f5f5f5", paper: "#ffffff" }
        : { default: "#dc600dff", paper: "#d7a116ff" },
  },
});

export const appTheme = (mode: ColorMode) => createTheme(getTokens(mode));
