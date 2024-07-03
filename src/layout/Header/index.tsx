import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import SearchTrack from "../../components/SearchTrack";

function Header(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          py: { xs: 2, md: 1 },
          px: { xs: 3, md: 5 },
          borderRadius: "50px",
        }}
      >
        <Toolbar sx={{ flexDirection: { xs: "column", md: "row" } }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ flexGrow: 1, pb: { xs: 2, md: 0 } }}
          >
            LyricsFinder
          </Typography>
          <SearchTrack />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
