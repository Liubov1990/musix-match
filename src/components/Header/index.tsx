import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchTrack from "../SearchTrack";
import { Link, useLocation } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher";

function Header(): React.ReactElement {
  const { pathname } = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        py: { xs: 2, md: 1 },
        px: { xs: 1, sm: 2, md: 5 },
        borderRadius: "50px",
      }}
      color="default"
    >
      <Toolbar sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Typography
          variant="h5"
          component="h1"
          sx={{ flexGrow: 1, pb: { xs: 2, md: 0 } }}
        >
          <Link to={"/"}>LyricsFinder</Link>
        </Typography>
        <ThemeSwitcher />
        {pathname === "/" && <SearchTrack />}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
