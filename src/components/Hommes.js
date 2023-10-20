import React from "react";
import Product from "./Product";
import { isEmpty } from "./Utils";
import { useSelector } from "react-redux";

function Hommes() {
  const products = useSelector((state) => state.productReducer);

  const hommesProducts = products.filter(
    (product) => product.categories === "Hommes"
  );

  return (
    <div className="content">
      <div className="product-card-container">
        {!isEmpty(hommesProducts) &&
          hommesProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Hommes;
