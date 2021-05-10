import { combineReducers } from 'redux';
import imageDataReducer from './imageDataReducer';
import pageDataReducer from './pageDataReducer';

export default combineReducers({
  imageData: imageDataReducer,
  pageData: pageDataReducer
})