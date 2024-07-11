import { Box, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

export const StyledBox = styled(Box)(() => ({
  height: "100vh",
  position: "relative",
  overflow: "hidden",
  background: grey[900],
}));

export const ErrPageImg = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  opacity: 0.7,
}));

export const ErrPageOverlay = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  padding: "50px",
}));
