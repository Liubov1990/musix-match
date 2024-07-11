import { Theme } from "@mui/material";
import baseTheme from "../theme";

export const getThemeFromLocalStorage = (): Theme => {
  const themeFromLocalStorage = JSON.parse(
    localStorage.getItem("themeMode") as string
  );

  if (themeFromLocalStorage) {
    return themeFromLocalStorage;
  }
  return baseTheme;
};

export const setTemeToLocalStorage = (mode: Theme): void => {
  localStorage.setItem("themeMode", JSON.stringify(mode));
};
