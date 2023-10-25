import { GET_SEARCH } from "../actions/search.actions";
const initialState = "";

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH:
      return action.payload;

    default:
      return state;
  }
}
