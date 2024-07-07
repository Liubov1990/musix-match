import React, { useState } from "react";
import { useContext } from "react";
import { LyricsContext } from "../../context/LyricsContext";
import Track from "../Track";

function TracksList(): React.ReactElement {
  const { trackList } = useContext(LyricsContext);

  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {trackList?.map(({ track }, index) => (
        <Track
          key={track.track_id}
          expanded={expanded === index}
          onChange={handleChange(index)}
          track={track}
        />
      ))}
    </>
  );
}

export default TracksList;
