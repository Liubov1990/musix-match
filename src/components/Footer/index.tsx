import { useContext } from "react";
import { Typography } from "@mui/material";
import { AppContext } from "../../context/AppContext";
import { StyledBox, StyledDivider } from "./styles";

function Footer(): React.ReactElement {
  const { lyrics } = useContext(AppContext);

  return (
    <>
      <StyledBox component="footer">
        <StyledDivider />
        <Typography component="p">
          {!lyrics.lyrics_copyright ? (
            <>
              <Typography component="span">Povered by </Typography>
              <a href="https://www.musixmatch.com/" target="blank">
                musixmatch.com
              </a>
            </>
          ) : (
            `${lyrics.lyrics_copyright}`
          )}
        </Typography>
      </StyledBox>
    </>
  );
}

export default Footer;
