import { SyntheticEvent, useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { AppContext } from "../../context/AppContext";
import { getTrackSearchRequest } from "../../api";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";

function SearchTrack() {
  const { setTrackList, setIsLoading, setIsError } = useContext(AppContext);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: SyntheticEvent): void => {
    const { value } = event.target as HTMLInputElement;
    setInputValue(value);
  };

  const isInputInvalid = (): boolean => {
    const isWhitespaceString = !inputValue.replace(/\s/g, "").length;
    return isWhitespaceString || !inputValue.length;
  };

  const displaySongsList = async (event: SyntheticEvent): Promise<void> => {
    event.preventDefault();

    try {
      if (isInputInvalid()) {
        return;
      }

      setIsLoading(true);
      const response = await getTrackSearchRequest(inputValue);
      const { track_list } = response.data.message.body;

      if (!track_list) {
        return;
      }

      setTrackList(track_list);
      setInputValue("");
      setIsLoading(false);
    } catch (error: unknown) {
      if (error) {
        setIsError(true);
      }
    }
  };

  const displaySongsListOnEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    const { code } = event;

    if (code === "Enter") {
      displaySongsList(event);
    }
  };

  return (
    <Search>
      <form
        action="#"
        method="get"
        name="search-tracks"
        onSubmit={displaySongsList}
      >
        <SearchIconWrapper type="submit" aria-label="search">
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search track..."
          inputProps={{ "aria-label": "search" }}
          type="search"
          onKeyUp={displaySongsListOnEnter}
          onChange={handleInputChange}
          value={inputValue}
        />
      </form>
    </Search>
  );
}

export default SearchTrack;
