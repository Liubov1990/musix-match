import React, { useEffect, useState } from "react";
import { ILyrics, ILyricsDetails, ITrack, ITrackDetails } from "../../types";
import { useParams } from "react-router-dom";
import { getTracByIdRequest, getTrackLyricsRequest } from "../../api";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";

function Lyrics(): React.ReactElement {
  const { id } = useParams();

  const [track, setTrack] = useState<ITrackDetails | null>(null);
  const [lyrics, setLyrics] = useState<ILyricsDetails | null>(null);
  console.log(track);

  useEffect(() => {
    // displayLyrics();
    console.log(lyrics?.lyrics_copyright);
  }, []);

  const displayLyrics = async () => {
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
    <Paper
      elevation={6}
      sx={{
        p: { xs: 3, md: 8 },
        px: { xs: 3, sm: 5, md: 8 },
        my: { xs: 3, md: 4 },
        borderRadius: "50px",
      }}
    >
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
    </Paper>
  );
}

export default Lyrics;
