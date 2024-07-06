import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ITrackDetails } from "../../types";
import { getTracByIdRequest, getTrackLyricsRequest } from "../../api";
import { LyricsContext } from "../../context/LyricsContext";

function LyricsInfo(): React.ReactElement {
  const { id } = useParams();
  const { lyrics, setLyrics } = useContext(LyricsContext);
  const [track, setTrack] = useState<ITrackDetails | null>(null);

  useEffect(() => {
    displayLyrics();
  }, []);

  const displayLyrics = async (): Promise<void> => {
    if (!id) {
      return;
    }

    if (id) {
      const lyricsResp = await getTrackLyricsRequest(id);
      const lyricsItem = lyricsResp.data.message.body.lyrics;
      setLyrics(lyricsItem);

      const trackResp = await getTracByIdRequest(id);
      const trackItem = trackResp.data.message.body.track;
      setTrack(trackItem);
    }
  };

  return (
    <>
      {track && lyrics && (
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="0"
              image={lyrics?.pixel_tracking_url}
              alt="Cover"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {track.track_name} by {track.artist_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {lyrics.lyrics_body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
}

export default LyricsInfo;
