import { createContext, useState } from "react";
import { IChildren, ILyrics, ITrack } from "../types";

type TrackListType = {
  trackList: ITrack[];
  setTrackList: React.Dispatch<React.SetStateAction<ITrack[]>>;
};

export const LyricsContext = createContext<TrackListType>({
  trackList: [],
  setTrackList: () => null,
});

export default function ContextProvider({
  children,
}: IChildren): React.ReactNode {
  const [trackList, setTrackList] = useState<ITrack[]>([]);

  const contextValue = {
    trackList,
    setTrackList,
  };

  return (
    <LyricsContext.Provider value={contextValue}>
      {children}
    </LyricsContext.Provider>
  );
}
