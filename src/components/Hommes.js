import React from "react";
import Product from "./Product";
import { getProduct } from "../actions/product.action";
import { isEmpty } from "./Utils";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function Hommes() {
  const products = useSelector((state) => state.productReducer);
  const [hommesProducts, setHommesProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getProduct());

        setHommesProducts(
          products.filter((product) => product.categories === "Hommes")
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch, products]);

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
