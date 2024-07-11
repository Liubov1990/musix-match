import React, { createContext, useCallback, useState } from "react";
import baseTheme from "../theme";
import { CssBaseline, Theme, ThemeProvider, createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import {
  getThemeFromLocalStorage,
  setTemeToLocalStorage,
} from "../utils/themePreference";

export type ThemeContextType = {
  appTheme: Theme;
  switchTheme: (mode: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  appTheme: baseTheme,
  switchTheme: (_mode: Theme) => null,
});

export default function ThemeContextProvider({
  children,
}: React.PropsWithChildren): React.ReactElement {
  const [appTheme, setAppTheme] = useState<Theme>(
    createTheme(deepmerge(baseTheme, getThemeFromLocalStorage()))
  );

  const switchTheme = useCallback(
    (mode: Theme): void => {
      setAppTheme(createTheme(appTheme, mode));
      setTemeToLocalStorage(mode);
    },
    [appTheme]
  );

  const contextValue = {
    appTheme,
    switchTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
