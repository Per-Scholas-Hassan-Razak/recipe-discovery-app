import { createTheme } from "@mui/material/styles";
import type { ColorMode } from "../types";

export const getTokens = (mode: ColorMode) => ({
  palette: {
    mode,
    primary: { main: "#eaeef3ff" },
    background:
      mode === "light"
        ? { default: "#f5f5f5", paper: "#ffffff" }
        : { default: "#393a3cff", paper: "#393a3cff" },
  },
});

export const appTheme = (mode: ColorMode) => createTheme(getTokens(mode));
