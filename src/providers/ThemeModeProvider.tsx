import { useMemo, useState } from "react";
import type { ColorMode } from "../types";
import { appTheme } from "../theme/theme";
import { ThemeModeContext } from "../contexts/context";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

export const ThemeModeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<ColorMode>("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => appTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};