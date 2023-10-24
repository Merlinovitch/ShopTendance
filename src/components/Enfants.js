import React, { useEffect } from "react";
import Product from "./Product";
import { getProduct } from "../actions/product.action";
import { isEmpty } from "./Utils";
import { useSelector, useDispatch } from "react-redux";

function Enfants() {
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

  let enfantsProducts = Array.isArray(products) ? products : [];

  enfantsProducts = enfantsProducts.filter(
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
