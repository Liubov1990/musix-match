import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import { ThemeContext } from "../../context/ThemeContext";
import { ITrack, ITrackDetails } from "../../types";
import TrackDetails from "../TrackDetails";

interface ITrackProps extends ITrack {
  props?: ITrackDetails;
  expanded: boolean;
  onChange: (isExpanded: boolean) => void;
}

function Track({ track }: ITrackProps): React.ReactElement {
  const { appTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const { track_id, track_name, has_lyrics } = track;

  const clickHandler = () => {
    navigate(`/lyrics/track/${track_id}`);
  };

  return (
    <>
      {has_lyrics !== 0 && (
        <Accordion>
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{ background: appTheme.palette.primary.dark }}
          >
            <Typography component="h2">{track_name}</Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ background: appTheme.palette.primary.light }}>
            <TrackDetails track={track} />
            <Button
              variant="contained"
              color="secondary"
              onClick={clickHandler}
              sx={{
                width: "100%",
              }}
            >
              View Lyrics
            </Button>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
}
export default Track;
