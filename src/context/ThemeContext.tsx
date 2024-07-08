import React, { createContext, useEffect, useState } from "react";
import { appDarkTheme, appLightTheme } from "../theme";
import { Theme, ThemeProvider } from "@mui/material";

export enum IAppThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

export type ThemeContextType = {
  appThemeMode: IAppThemeMode;
  switchThemeMode: (mode: IAppThemeMode) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  appThemeMode: IAppThemeMode.LIGHT,
  switchThemeMode: (_mode: IAppThemeMode) => null,
});

export default function ThemeContextProvider({
  children,
}: React.PropsWithChildren): React.ReactElement {
  const [appThemeMode, setAppThemeMode] = useState<IAppThemeMode>(
    IAppThemeMode.LIGHT
  );
  const [appTheme, setAppTheme] = useState<Theme>(appLightTheme);

  useEffect(() => {
    const theme =
      appThemeMode === IAppThemeMode.LIGHT ? appLightTheme : appDarkTheme;
    setAppTheme(theme);
  }, [appThemeMode]);

  const switchThemeMode = (mode: IAppThemeMode) => {
    setAppThemeMode(mode);
  };

  return (
    <ThemeContext.Provider value={{ appThemeMode, switchThemeMode }}>
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
