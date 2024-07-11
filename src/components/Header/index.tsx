import { Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import SearchTrack from "../SearchTrack";
import ThemeSwitcher from "../ThemeSwitcher";
import { StyledBox, StyledAppBar, StyledToolbar } from "./styles";

function Header(): React.ReactElement {
  const { pathname } = useLocation();

  return (
    <StyledAppBar>
      <StyledToolbar>
        <StyledBox component="div">
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
            <Link to={"/"}>LyricsFinder</Link>
          </Typography>
          <ThemeSwitcher />
        </StyledBox>
        {pathname === "/" && <SearchTrack />}
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;
