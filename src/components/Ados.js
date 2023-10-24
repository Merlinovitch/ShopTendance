import React from "react";
import Product from "./Product";
import { getProduct } from "../actions/product.action";
import { isEmpty } from "./Utils";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function Ados() {
  const products = useSelector((state) => state.productReducer);
  const [adosProducts, setAdosProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getProduct());
        setAdosProducts(
          products.filter((product) => product.categories === "Ados")
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
        {!isEmpty(adosProducts) &&
          adosProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Ados;
