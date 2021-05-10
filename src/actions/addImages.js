import {
  ADD_ALBUM,
  ADD_IMAGES,
  INC_PAGE,
  LOADED,
  SET_LOADING,
} from "./types.js";

export const addImages = (page) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
  fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
    .then((res) => res.json())
    .then((images) => {
      dispatch({
        type: ADD_IMAGES,
        payload: images,
      });
      dispatch({
        type: INC_PAGE,
      });
      dispatch({
        type: ADD_ALBUM,
        payload: images[9].albumId,
      });
      dispatch({
        type: LOADED,
      });
    });
};
