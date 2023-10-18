import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { getProduct } from "./actions/product.action";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getProduct());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
