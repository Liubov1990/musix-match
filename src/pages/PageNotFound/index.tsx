import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ErrPageImg, ErrPageOverlay, StyledBox } from "./styles";

interface IErrorTextMap {
  option: Variant;
  text: string;
}

function PageNotFound(): React.ReactElement {
  const navigate = useNavigate();

  const errorTextMap = [
    { option: "h3", text: "Ooops..." },
    { option: "h2", text: "404" },
    { option: "h4", text: "Page not found" },
  ] as IErrorTextMap[];

  const clickHandler = () => {
    navigate("/");
  };

  return (
    <StyledBox component="section">
      <ErrPageImg
        src="/musix-match/images/photo-1571330735066-03aaa9429d89.avif"
        alt="Broken tape"
      />
      <ErrPageOverlay className="overlay">
        {errorTextMap.map(({ option, text }, index) => (
          <Typography
            key={index}
            component="p"
            variant={option}
            fontWeight="fontWeightBold"
          >
            {text}
          </Typography>
        ))}
        <Button
          variant="contained"
          color="secondary"
          endIcon={<ArrowForwardIcon />}
          onClick={clickHandler}
          sx={{ mt: "50px" }}
        >
          Back Home
        </Button>
      </ErrPageOverlay>
    </StyledBox>
  );
}
export default PageNotFound;
