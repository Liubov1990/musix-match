import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { LyricsContext } from "../../context/LyricsContext";
import AlbumIcon from "@mui/icons-material/Album";
import PlayIcon from "@mui/icons-material/PlayCircle";
import React from "react";
import Moment from "react-moment";
import ButtonComponent from "../ButtonComponent";
import TypographyElement from "../TypographyElement";

function TracksList(): React.ReactElement {
  const { trackList } = useContext(LyricsContext);

  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Paper
      elevation={6}
      sx={{
        p: { xs: 3, md: 8 },
        px: { xs: 3, sm: 5, md: 8 },
        my: { xs: 3, md: 4 },
        borderRadius: "50px",
      }}
    >
      {trackList?.map(
        (
          {
            track: {
              track_id,
              track_name,
              artist_name,
              album_name,
              has_lyrics,
              primary_genres,
              updated_time,
            },
          },
          index
        ) => (
          <Accordion
            key={track_id}
            expanded={expanded === index}
            onChange={handleChange(index)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography variant="h6" component="h2">
                {track_name}
              </Typography>
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
                {
                  primary_genres.music_genre_list[0].music_genre
                    .music_genre_name
                }
              </TypographyElement>
              <TypographyElement>
                Updated: <Moment format="MM/DD/YYYY">{updated_time}</Moment>
              </TypographyElement>

              {has_lyrics === 1 && (
                <ButtonComponent>View Lyrics</ButtonComponent>
              )}
            </AccordionDetails>
          </Accordion>
        )
      )}
    </Paper>
  );
}

export default TracksList;
