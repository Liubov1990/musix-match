import { styled, Paper } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "20px",
  width: "100%",

  [theme.breakpoints.up("xs")]: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(5),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.up("xl")]: {
    padding: theme.spacing(8),
  },
}));
