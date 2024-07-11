import { Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  minWidth: "320px",
  minHeight: "100vh",
  paddingTop: "16px",
}));
