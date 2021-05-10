import {
  INC_PAGE,
  CHANGE_Y,
  SET_LOADING,
  LOADED,
} from "../actions/types.js";

const initialState = {
  page: 1,
  y: 0,
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INC_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case CHANGE_Y:
      return {
        ...state,
        y: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOADED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
