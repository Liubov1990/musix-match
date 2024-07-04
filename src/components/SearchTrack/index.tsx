import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import { SyntheticEvent, useContext, useState } from "react";
import { getTrackSearchRequest } from "../../api";
import { LyricsContext } from "../../context/LyricsContext";

function SearchTrack() {
  const { setTrackList } = useContext(LyricsContext);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: SyntheticEvent): void => {
    const { value } = event.target as HTMLInputElement;
    setInputValue(value);
  };

  const displaySongsList = async (): Promise<void> => {
    const responce = await getTrackSearchRequest(inputValue);
    const { track_list } = responce.data.message.body;

    if (!track_list) {
      return;
    }

    if (track_list && inputValue.length) {
      setTrackList(track_list);
    }
  };

  const displaySongsListOnEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    const { code } = event;

    if (code === "Enter") {
      displaySongsList();
    }
  };

  return (
    <Search>
      <SearchIconWrapper value={inputValue} onClick={displaySongsList}>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search track..."
        inputProps={{ "aria-label": "search" }}
        type="search"
        onKeyUp={displaySongsListOnEnter}
        onChange={handleInputChange}
      />
    </Search>
  );
}

export default SearchTrack;
