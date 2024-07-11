import axios, { AxiosResponse } from "axios";
import { API_KEY } from "../constants/apiKey";
import { HEROCUAPP_LINK, MUSIXMATCH_LINK } from "../constants/apiLinks";
import {
  ITrackLyricsResponse,
  ITrackSearchByIdResponse,
  ITrackSearchResponse,
} from "../types";

export async function getTrackSearchRequest(
  title: string
): Promise<AxiosResponse<ITrackSearchResponse>> {
  try {
    return await axios.get(
      `${HEROCUAPP_LINK}${MUSIXMATCH_LINK}track.search?q_track=${title}&page_size=10&page=1&s_track_rating=desc&apikey=${API_KEY}`
    );
  } catch (error: unknown) {
    throw error;
  }
}

export async function getTrackLyricsRequest(
  id: string
): Promise<AxiosResponse<ITrackLyricsResponse>> {
  try {
    return await axios.get(
      `${HEROCUAPP_LINK}${MUSIXMATCH_LINK}track.lyrics.get?track_id=${id}&apikey=${API_KEY}`
    );
  } catch (error: unknown) {
    throw error;
  }
}

export async function getTracByIdRequest(
  id: string
): Promise<AxiosResponse<ITrackSearchByIdResponse>> {
  try {
    return await axios.get(
      `${HEROCUAPP_LINK}${MUSIXMATCH_LINK}track.get?track_id=${id}&apikey=${API_KEY}`
    );
  } catch (error: unknown) {
    throw error;
  }
}
