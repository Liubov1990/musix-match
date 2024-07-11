import { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { AppContext } from "../../context/AppContext";
import { StyledBox, StyledDivider } from "./styles";

function Footer(): React.ReactElement {
  const { pathname } = useLocation();
  const params = useParams();
  const { id } = params;

  const { lyrics, isLoading, isError } = useContext(AppContext);

  const isDisplayLyrics = lyrics && !isLoading && !isError;

  return (
    <>
      {isDisplayLyrics && (
        <StyledBox component="footer">
          <StyledDivider />
          <Typography component="p">
            {pathname === "/" && (
              <>
                <Typography component="span">Povered by </Typography>
                <a href="https://www.musixmatch.com/" target="blank">
                  musixmatch.com
                </a>
              </>
            )}
            {pathname === `/lyrics/track/${id}` &&
              lyrics.lyrics_copyright &&
              `${lyrics.lyrics_copyright}`}
          </Typography>
        </StyledBox>
      )}
    </>
  );
}

export default Footer;
