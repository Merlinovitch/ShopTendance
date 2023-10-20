import React from "react";
import Product from "./Product";
import { isEmpty } from "./Utils";
import { useSelector } from "react-redux";

function Ados() {
  const products = useSelector((state) => state.productReducer);

  const adosProducts = products.filter(
    (product) => product.categories === "Ados"
  );

  return (
    <div className="content">
      <div className="product-card-container">
        {!isEmpty(adosProducts) &&
          adosProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Ados;
