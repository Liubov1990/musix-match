import { createContext, useState } from "react";
import { IChildren, ILyricsDetails, ITrack } from "../types";

type AppContextType = {
  trackList: ITrack[];
  lyrics: ILyricsDetails;
  setTrackList: React.Dispatch<React.SetStateAction<ITrack[]>>;
  setLyrics: React.Dispatch<React.SetStateAction<ILyricsDetails>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType>({
  trackList: [],
  lyrics: {} as ILyricsDetails,
  setTrackList: () => null,
  setLyrics: () => null,
  isLoading: false,
  setIsLoading: () => null,
  isError: false,
  setIsError: () => null,
});

export default function ContextProvider({
  children,
}: IChildren): React.ReactElement {
  const [trackList, setTrackList] = useState<ITrack[]>([]);
  const [lyrics, setLyrics] = useState<ILyricsDetails>({} as ILyricsDetails);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const contextValue = {
    trackList,
    lyrics,
    setTrackList,
    setLyrics,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
