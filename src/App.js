import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./components/Utils";
import "./styles/index.css";
import Product from "./components/Product";
import PostForm from "./components/PostForm";

function App() {
  const products = useSelector((state) => state.productReducer);

  return (
    <>
      <div>
        <PostForm />
      </div>
      <div className="content">
        <div className="product-card-container">
          {!isEmpty(products) &&
            products.map((product, index) => (
              <Product product={product} key={index} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
