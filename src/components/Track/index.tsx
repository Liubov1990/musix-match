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
import { ITrack } from "../../types";
import TrackDetails from "../TrackDetails";

interface ITrackProps extends ITrack {
  currentIndex: number;
  expandedIndex: number | null;
  setExpandedIndex: (index: number | null) => void;
}

function Track({
  track,
  currentIndex,
  expandedIndex,
  setExpandedIndex,
}: ITrackProps): React.ReactElement {
  const navigate = useNavigate();
  const { appTheme } = useContext(ThemeContext);

  const { track_id, track_name, has_lyrics } = track;

  const handleChange = (isExpanded: boolean) => {
    setExpandedIndex(isExpanded ? currentIndex : null);
  };

  const clickHandler = () => {
    navigate(`/lyrics/track/${track_id}`);
  };

  return (
    <>
      {has_lyrics !== 0 && (
        <Accordion
          expanded={expandedIndex === currentIndex}
          onChange={(_event: React.SyntheticEvent, isExpanded: boolean) =>
            handleChange(isExpanded)
          }
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
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
