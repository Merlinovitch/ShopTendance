import React, { useEffect } from "react";
import Product from "./Product";
import { getProduct } from "../actions/product.action";
import { isEmpty } from "./Utils";
import { useSelector, useDispatch } from "react-redux";

function Femmes() {
  const products = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getProduct());
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch]);

  let femmesProducts = Array.isArray(products) ? products : [];

  femmesProducts = femmesProducts.filter(
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
