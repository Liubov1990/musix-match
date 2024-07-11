import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CustomPaper from "../CustomPaper";
import Track from "../Track";
import { StyledBox } from "./styles";
import Message from "../Message";
import Loader from "../Loader";

function TracksList(): React.ReactElement {
  const { trackList, isLoading, isError } = useContext(AppContext);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const isDisplayLoader = isLoading && !isError;
  const isNoSongsToDisplay = trackList.length === 0 && !isLoading;
  const isSongsToDisplay =
    trackList && trackList.length !== 0 && !isLoading && !isError;

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
            {trackList?.map(({ track }, index) => {
              return (
                <Track
                  key={track.track_id}
                  track={track}
                  expandedIndex={expandedIndex}
                  setExpandedIndex={setExpandedIndex}
                  currentIndex={index}
                />
              );
            })}
          </StyledBox>
        </CustomPaper>
      )}
    </>
  );
}

export default TracksList;
