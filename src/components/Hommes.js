import React, { useEffect } from "react";
import Product from "./Product";
import { getProduct } from "../actions/product.action";
import { isEmpty } from "./Utils";
import { useSelector, useDispatch } from "react-redux";

function Hommes() {
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

  let hommesProducts = Array.isArray(products) ? products : [];

  hommesProducts = hommesProducts.filter(
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
