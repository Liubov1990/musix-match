import { createTheme } from "@mui/material";

export const appLightTheme = createTheme({
  palette: {
    background: {
      default: "orange",
      paper: "orange",
    },
  },
});

export const appDarkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "grey",
      paper: "grey",
    },
  },
});
