import React, { useEffect } from "react";
import Product from "./Product";
import { getProduct } from "../actions/product.action";
import { isEmpty } from "./Utils";
import { useSelector, useDispatch } from "react-redux";

function CategoryProducts({ category }) {
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

  let categoryProducts = Array.isArray(products) ? products : [];

  categoryProducts = categoryProducts.filter(
    (product) => product.categories === category
  );

  return (
    <div className="content">
      <div className="product-card-container">
        {!isEmpty(categoryProducts) &&
          categoryProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
