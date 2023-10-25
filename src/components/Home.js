import React from "react";
import Product from "./Product";
import { isEmpty } from "./Utils";
import { useSelector } from "react-redux";
import Searchbar from "./Searchbar";
import { useState } from "react";

function Home() {
  const [searchResult, setSearchResult] = useState([]);
  const product = useSelector((state) => state.productReducer);
  const research = useSelector((state) => state.searchReducer);

  const handleSearchResult = (results) => {
    setSearchResult(results);
  };

  const filteredProducts = product.filter((product) =>
    product.title.toLowerCase().includes(research)
  );

  return (
    <>
      <Searchbar onSearch={handleSearchResult} />
      {!isEmpty(product) && !research && (
        <div className="product-card-container">
          {!isEmpty(product) &&
            product.map((product, index) => (
              <Product product={product} key={index} />
            ))}
        </div>
      )}

      {!isEmpty(product) && research && (
        <div className="product-card-container">
          {!isEmpty(product) &&
            filteredProducts.map((product, index) => (
              <Product product={product} key={index} />
            ))}
        </div>
      )}
    </>
  );
}
export default Home;
