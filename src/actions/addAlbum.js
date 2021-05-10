import { ADD_ALBUM } from "./types";

export const addAlbum = (album) => ({
  type: ADD_ALBUM,
  payload: album
});