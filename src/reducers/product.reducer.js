import {
  ADD_PRODUCT,
  GET_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/product.action";
const initialState = {};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.payload;

    case ADD_PRODUCT:
      return [...state, action.payload];

    case EDIT_PRODUCT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            description: action.payload.description,
          };
        } else return product;
      });
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
}
