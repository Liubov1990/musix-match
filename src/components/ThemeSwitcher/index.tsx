import { Switch } from "@mui/material";
import React, { useContext } from "react";
import { IAppThemeMode, ThemeContext } from "../../context/ThemeContext";

function ThemeSwitcher() {
  const { switchThemeMode } = useContext(ThemeContext);

  const handleSwitchTheme = ({
    target: { checked },
  }: React.ChangeEvent<HTMLInputElement>) =>
    checked
      ? switchThemeMode(IAppThemeMode.DARK)
      : switchThemeMode(IAppThemeMode.LIGHT);

  return (
    <Switch
      onChange={(event) => handleSwitchTheme(event)}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}

export default ThemeSwitcher;
