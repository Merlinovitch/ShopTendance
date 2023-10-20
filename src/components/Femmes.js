import React from "react";
import Product from "./Product";
import { isEmpty } from "./Utils";
import { useSelector } from "react-redux";

function Femmes() {
  const products = useSelector((state) => state.productReducer);

  const femmesProducts = products.filter(
    (product) => product.categories === "Femmes"
  );

  return (
    <div className="content">
      <div className="product-card-container">
        {!isEmpty(femmesProducts) &&
          femmesProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Femmes;
