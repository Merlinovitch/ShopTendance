export const GET_SEARCH = "GET_SEARCH";

export const searchProduct = (data) => {
  return (dispatch) => {
    dispatch({ type: GET_SEARCH, payload: data });
  };
};
