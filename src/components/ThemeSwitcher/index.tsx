import React, { useContext } from "react";
import { Switch, Theme } from "@mui/material";
import { ThemeContext } from "../../context/ThemeContext";
import baseTheme, { darkTheme } from "../../theme";

function ThemeSwitcher() {
  const { switchTheme, appTheme } = useContext(ThemeContext);

  const handleSwitchTheme = ({
    target: { checked },
  }: React.ChangeEvent<HTMLInputElement>) =>
    checked ? switchTheme(darkTheme as Theme) : switchTheme(baseTheme);

  return (
    <Switch
      checked={appTheme.palette.mode === "dark"}
      onChange={(event) => handleSwitchTheme(event)}
      inputProps={{ "aria-label": "controlled" }}
      color="secondary"
      sx={{ transform: "translateX(9px)" }}
    />
  );
}

export default ThemeSwitcher;
