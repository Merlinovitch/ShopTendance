import React, { useEffect } from "react";
import Product from "./Product";
import { getProduct } from "../actions/product.action";
import { isEmpty } from "./Utils";
import { useSelector, useDispatch } from "react-redux";

function Bébés() {
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

  let bébésProducts = Array.isArray(products) ? products : [];

  bébésProducts = bébésProducts.filter(
    (product) => product.categories === "Bébés"
  );

  return (
    <div className="content">
      <div className="product-card-container">
        {!isEmpty(bébésProducts) &&
          bébésProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Bébés;
