import React from "react";
import Product from "./Product";
import { getProduct } from "../actions/product.action";
import { isEmpty } from "./Utils";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function Femmes() {
  const products = useSelector((state) => state.productReducer);
  const [femmesProducts, setFemmesProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getProduct());

      try {
        {
          !isEmpty(products) &&
            setFemmesProducts(
              products.filter((product) => product.categories === "Femmes")
            );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch, products]);

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
