import { createContext, useState } from "react";
import { IChildren, ILyricsDetails, ITrack } from "../types";

type LyricsContextType = {
  trackList: ITrack[];
  lyrics: ILyricsDetails;
  setTrackList: React.Dispatch<React.SetStateAction<ITrack[]>>;
  setLyrics: React.Dispatch<React.SetStateAction<ILyricsDetails>>;
};

export const LyricsContext = createContext<LyricsContextType>({
  trackList: [],
  lyrics: {} as ILyricsDetails,
  setTrackList: () => null,
  setLyrics: () => null,
});

export default function ContextProvider({
  children,
}: IChildren): React.ReactElement {
  const [trackList, setTrackList] = useState<ITrack[]>([]);
  const [lyrics, setLyrics] = useState<ILyricsDetails>({} as ILyricsDetails);

  const contextValue = {
    trackList,
    lyrics,
    setTrackList,
    setLyrics,
  };

  return (
    <LyricsContext.Provider value={contextValue}>
      {children}
    </LyricsContext.Provider>
  );
}
