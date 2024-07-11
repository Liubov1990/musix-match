import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CustomPaper from "../CustomPaper";
import Track from "../Track";
import { StyledBox } from "./styles";
import Message from "../Message";
import Loader from "../Loader";

function TracksList(): React.ReactElement {
  const { trackList, isLoading, isError } = useContext(AppContext);
  const [expanded, setExpanded] = useState<number | false>(false);

  const isDisplayLoader = isLoading && !isError;
  const isNoSongsToDisplay = trackList.length === 0 && !isLoading;
  const isSongsToDisplay =
    trackList && trackList.length !== 0 && !isLoading && !isError;

  const handleChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      {isError && (
        <Message>
          You exceeded number of search queries! Please, try again later!
        </Message>
      )}
      {isNoSongsToDisplay && <Message> No songs!</Message>}
      {isDisplayLoader && <Loader />}
      {isSongsToDisplay && (
        <CustomPaper>
          <StyledBox component="div">
            {trackList?.map(({ track }, index) => (
              <Track
                key={track.track_id}
                expanded={expanded === index}
                onChange={(_event) => handleChange(index)}
                track={track}
              />
            ))}
          </StyledBox>
        </CustomPaper>
      )}
    </>
  );
}

export default TracksList;
