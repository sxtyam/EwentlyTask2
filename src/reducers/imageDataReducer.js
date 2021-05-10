import { ADD_ALBUM, ADD_IMAGES } from "../actions/types.js";

const initialState = {
  images: [],
  albums: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGES:
      return {
        ...state,
        images: [...state.images, ...action.payload],
      };
    case ADD_ALBUM:
      console.log("Adding Album");
      if (
        state.albums.length === 0 ||
        state.albums[state.albums.length - 1] !== action.payload
      ) {
        return {
          ...state,
          albums: [...state.albums, action.payload],
        };
      } else return state;
    default:
      return state;
  }
}
