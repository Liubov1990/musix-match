import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { AppContext } from "../../context/AppContext";
import { ITrackDetails } from "../../types";
import { getTracByIdRequest, getTrackLyricsRequest } from "../../api";
import CustomPaper from "../CustomPaper";
import Message from "../Message";
import Loader from "../Loader";

function LyricsInfo(): React.ReactElement {
  const { id } = useParams();
  const { lyrics, setLyrics, isLoading, setIsLoading, isError, setIsError } =
    useContext(AppContext);
  const [track, setTrack] = useState<ITrackDetails | null>(null);

  const isNoLyricsToDisplay = !lyrics?.lyrics_body && !isLoading && !isError;
  const isDisplayLoader = isLoading && !isError;
  const isDisplayLyrics = track && lyrics && !isLoading && !isError;

  useEffect(() => {
    displayLyrics();
  }, []);

  const displayLyrics = async (): Promise<void> => {
    try {
      if (!id) {
        return;
      }

      if (id) {
        setIsLoading(true);
        const lyricsRes = await getTrackLyricsRequest(id);
        const lyricsItem = lyricsRes.data.message.body.lyrics;
        setLyrics(lyricsItem);

        const trackRes = await getTracByIdRequest(id);
        const trackItem = trackRes.data.message.body.track;
        setTrack(trackItem);
        setIsLoading(false);
      }
    } catch (error: unknown) {
      if (error) {
        setIsError(true);
      }
    }
  };

  return (
    <>
      {isNoLyricsToDisplay && (
        <Message>Can't find lyrics for this track!</Message>
      )}
      {isError && (
        <Message>
          You exceeded number of search queries! Please, try again later!
        </Message>
      )}
      {isDisplayLoader && <Loader />}
      {isDisplayLyrics && (
        <CustomPaper>
          <Card sx={{ width: "100%" }}>
            <CardMedia
              component="img"
              height="0"
              image={lyrics.pixel_tracking_url}
              alt="Tracking image."
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="text.secondary"
              >
                {track.track_name} by {track.artist_name}
              </Typography>
              <Typography variant="body2" sx={{ whiteSpace: "pre" }}>
                {lyrics.lyrics_body}
              </Typography>
            </CardContent>
          </Card>
        </CustomPaper>
      )}
    </>
  );
}

export default LyricsInfo;
