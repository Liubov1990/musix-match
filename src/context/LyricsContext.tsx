import { createContext, useState } from "react";
import { IChildren, ILyrics, ITrack } from "../types";

type LyricsContextType = {
  trackList: ITrack[];
  lyrics: ILyrics;
  setTrackList: React.Dispatch<React.SetStateAction<ITrack[]>>;
  setLyrics: React.Dispatch<React.SetStateAction<ILyrics>>;
};

export const LyricsContext = createContext<LyricsContextType>({
  trackList: [],
  lyrics: {} as ILyrics,
  setTrackList: () => null,
  setLyrics: () => null,
});

export default function ContextProvider({
  children,
}: IChildren): React.ReactNode {
  const [trackList, setTrackList] = useState<ITrack[]>([]);
  const [lyrics, setLyrics] = useState<ILyrics>({} as ILyrics);

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
