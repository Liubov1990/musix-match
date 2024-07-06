import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import AlbumIcon from "@mui/icons-material/Album";
import PlayIcon from "@mui/icons-material/PlayCircle";
import TypographyElement from "../TypographyElement";
import { LyricsContext } from "../../context/LyricsContext";

// interface ITrackProps extends ITrack {}

function Track(props: any): React.ReactElement {
  const { trackList } = useContext(LyricsContext);

  const {
    track: {
      track_id,
      track_name,
      artist_name,
      album_name,
      primary_genres,
      updated_time,
      has_lyrics,
    },
  } = props;

  return (
    <Accordion>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography component="h2">{track_name}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <TypographyElement>
          <PlayIcon /> {artist_name}
        </TypographyElement>
        <TypographyElement>
          <AlbumIcon /> {album_name}
        </TypographyElement>
        <TypographyElement>
          Genre:
          {primary_genres.music_genre_list[0]?.music_genre.music_genre_name}
        </TypographyElement>
        <TypographyElement>
          Updated: <Moment format="MM/DD/YYYY">{updated_time}</Moment>
        </TypographyElement>

        {has_lyrics === 1 && (
          <Link to={`/lyrics/track/${track_id}`}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
              }}
            >
              View Lyrics
            </Button>
          </Link>
        )}
      </AccordionDetails>
    </Accordion>
  );
}
export default Track;
