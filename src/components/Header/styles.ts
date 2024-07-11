import { AppBar, Box, styled, Toolbar } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  background: theme.palette.primary.main,
  borderRadius: "50px",
  [theme.breakpoints.up("xs")]: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  [theme.breakpoints.up("xl")]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "center",
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const StyledBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
}));
