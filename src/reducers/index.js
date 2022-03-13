import { combineReducers } from "redux";

const fake = (state = [], action) => {
  return state;
};

export default combineReducers({
  fake,
});
