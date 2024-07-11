export interface IChildren {
  children: React.ReactNode | React.ReactNode[];
}

// api header interfaces
interface ILyricsSearchHeader {
  status_code: number;
  execute_time: number;
}

interface ITrackSearchHeader extends ILyricsSearchHeader {
  available: number;
}

// api search tracks interfaces

export interface ITrackSearchResponse {
  message: {
    header: ITrackSearchHeader;
    body: ITrackList;
  };
}

export interface ITrackList {
  track_list: ITrack[];
}

export interface ITrack {
  track: ITrackDetails;
}

interface IMusicGenre {
  music_genre: {
    music_genre_id: number;
    music_genre_name: string;
    music_genre_name_extended: string;
    music_genre_parent_id: number;
    music_genre_vanity: string;
  };
}

interface ITrackNameTranslation {
  track_name_translation: {
    language: string;
    translation: string;
  };
}

export interface ITrackDetails {
  album_id: number;
  album_name: string;
  artist_id: number;
  artist_name: string;
  commontrack_id: number;
  explicit: number;
  has_lyrics: number;
  has_richsync: number;
  has_subtitles: number;
  instrumental: number;
  num_favourite: number;
  primary_genres: {
    music_genre_list: IMusicGenre[];
  };
  restricted: number;
  track_edit_url: string;
  track_id: number;
  track_name: string;
  track_name_translation_list: ITrackNameTranslation[];
  track_rating: number;
  track_share_url: string;
  updated_time: Date;
}

// api search lyrics interfaces

export interface ITrackLyricsResponse {
  message: {
    header: ILyricsSearchHeader;
    body: ILyrics;
  };
}
export interface ILyrics {
  lyrics: ILyricsDetails;
}

export interface ILyricsDetails {
  lyrics_id: number;
  restricted: number;
  instrumental: number;
  lyrics_body: string;
  lyrics_language: string;
  script_tracking_url: string;
  pixel_tracking_url: string;
  lyrics_copyright: string;
  backlink_url: string;
  updated_time: Date;
}

// api search lyrics by id

export interface ITrackSearchByIdResponse {
  message: {
    header: ITrackSearchHeader;
    body: ITrack;
  };
}
