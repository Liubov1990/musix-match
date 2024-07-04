import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ILyricsDetails, ITrackDetails } from "../../types";
import { getTracByIdRequest, getTrackLyricsRequest } from "../../api";

function LyricsInfo(): React.ReactElement {
  const { id } = useParams();

  const [track, setTrack] = useState<ITrackDetails | null>(null);
  const [lyrics, setLyrics] = useState<ILyricsDetails | null>(null);
  console.log(track);

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
