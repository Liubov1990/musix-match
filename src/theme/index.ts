import { createTheme, responsiveFontSizes } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";

const baseTheme = createTheme({
  palette: {
    background: {
      default: grey[100],
      paper: grey[50],
    },
    primary: {
      main: grey[400],
      light: grey[200],
      dark: grey[300],
    },
    secondary: {
      main: yellow[400],
    },
    text: {
      primary: grey[900],
      secondary: yellow[400],
    },
  },
});

export const darkTheme = {
  palette: {
    mode: "dark",
    background: {
      default: grey[900],
      paper: grey[600],
    },
    primary: {
      main: grey[800],
      light: grey[600],
      dark: grey[700],
    },
    text: {
      primary: grey[50],
    },
  },
};

export default responsiveFontSizes(baseTheme);
