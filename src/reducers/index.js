import { combineReducers } from "redux";
import productReducer from "./product.reducer";
import searchReducer from "./search.reducer";

export default combineReducers({
  productReducer,
  searchReducer,
});
