import { Box, Divider, styled } from "@mui/material";

export const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.secondary.main,
  marginBottom: "20px",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  [theme.breakpoints.up("xs")]: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
}));
