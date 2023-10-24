import React from "react";
import Product from "./Product";
import { getProduct } from "../actions/product.action";
import { isEmpty } from "./Utils";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function Bebes() {
  const products = useSelector((state) => state.productReducer);
  const [bebesProducts, setBebesProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getProduct());
        setBebesProducts(
          products.filter((product) => product.categories === "Bébés")
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
        {!isEmpty(bebesProducts) &&
          bebesProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Bebes;
