import React from "react";
import Product from "./Product";
import { isEmpty } from "./Utils";
import { useSelector } from "react-redux";

function Enfants() {
  const products = useSelector((state) => state.productReducer);

  const enfantsProducts = products.filter(
    (product) => product.categories === "Enfants"
  );

  return (
    <div className="content">
      <div className="product-card-container">
        {!isEmpty(enfantsProducts) &&
          enfantsProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Enfants;
