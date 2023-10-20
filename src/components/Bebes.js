import React from "react";
import Product from "./Product";
import { isEmpty } from "./Utils";
import { useSelector } from "react-redux";

function Bebes() {
  const products = useSelector((state) => state.productReducer);

  const bebesProducts = products.filter(
    (product) => product.categories === "Bébés"
  );

  return (
    <div className="content">
      <div className="product-card-container">
        {!isEmpty(bebesProducts) &&
          bebesProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Bebes;
