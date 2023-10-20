import React from "react";
import Product from "./Product";
import { isEmpty } from "./Utils";
import { useSelector } from "react-redux";

function Home() {
  const products = useSelector((state) => state.productReducer);

  return (
    <div className="content">
      <div className="product-card-container">
        {!isEmpty(products) &&
          products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Home;
