import axios from "axios";

export const GET_PRODUCT = "GET_PRODUCT";
export const getProduct = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/products").then((res) => {
        dispatch({ type: GET_PRODUCT, payload: res.data });
    });
  };
};
