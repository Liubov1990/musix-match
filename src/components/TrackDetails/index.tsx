import React from "react";
import Moment from "react-moment";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { ITrack } from "../../types";

interface IdetailsMap {
  title: string;
  value: string | JSX.Element;
}

function TrackDetails({ track }: ITrack): React.ReactElement {
  const { artist_name, album_name, primary_genres, updated_time } = track;
  const detailsMap = [
    {
      title: "Album:",
      value: album_name,
    },
    {
      title: "Author:",
      value: artist_name,
    },
    {
      title: "Genre:",
      value: primary_genres.music_genre_list[0]?.music_genre.music_genre_name,
    },
    {
      title: "Updated:",
      value: <Moment format="MM/DD/YYYY">{updated_time}</Moment>,
    },
  ] as IdetailsMap[];

  return (
    <List>
      {detailsMap.map(({ title, value }, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {title} {!value && "-"}
                {value}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
export default TrackDetails;
