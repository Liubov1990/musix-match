import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { ErrPageImg, ErrPageOverlay } from "./styles";

function PageNotFound(): React.ReactElement {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };

  return (
    <Box
      component="section"
      sx={{ height: "100vh", position: "relative", overflow: "hidden" }}
    >
      <ErrPageImg
        src="/images/photo-1571330735066-03aaa9429d89.avif"
        alt="Broken tape"
      />
      <ErrPageOverlay className="overlay">
        <Typography component="h1" variant="h3">
          Ooops...
        </Typography>
        <Typography component="p" variant="h2">
          404
        </Typography>
        <Typography component="p" variant="h4">
          Page not found
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={clickHandler}
          sx={{ mt: "50px" }}
        >
          Back Home
        </Button>
      </ErrPageOverlay>
    </Box>
  );
}
export default PageNotFound;
