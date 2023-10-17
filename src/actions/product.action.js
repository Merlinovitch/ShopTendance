import axios from "axios";

export const GET_PRODUCT = "GET_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const getProduct = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/products").then((res) => {
      dispatch({ type: GET_PRODUCT, payload: res.data });
    });
  };
};

export const editProduct = (data) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:3000/products/${data.id}`, data)
      .then((res) => {
        dispatch({ type: EDIT_PRODUCT, payload: data });
      });
  };
};

export const addProduct = (data) => {
  return (dispatch) => {
    return axios.post("http://localhost:3000/products", data).then((res) => {
      dispatch({ type: ADD_PRODUCT, payload: data });
    });
  };
};

export const deleteProduct = (productId) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:3000/products/${productId}`)
      .then((res) => {
        dispatch({ type: DELETE_PRODUCT, payload: productId });
      });
  };
};
