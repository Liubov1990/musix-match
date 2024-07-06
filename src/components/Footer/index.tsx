import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { LyricsContext } from "../../context/LyricsContext";

function Footer(): React.ReactElement {
  const { pathname } = useLocation();

  const params = useParams();
  const { id } = params;
  // const id = pathname.split("/").pop();

  const { lyrics } = useContext(LyricsContext);

  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        mt: "auto",
        p: { xs: 2, md: 3 },
        px: { xs: 3, sm: 5, md: 8 },
      }}
    >
      <Typography component="p">
        {pathname === "/" && (
          <>
            <Typography component="span">Povered by </Typography>
            <a href="https://www.musixmatch.com/" target="blank">
              https://www.musixmatch.com/
            </a>
          </>
        )}
        {pathname === `/lyrics/track/${id}` &&
          lyrics.lyrics_copyright &&
          `${lyrics.lyrics_copyright}`}
      </Typography>
    </Box>
  );
}

export default Footer;
