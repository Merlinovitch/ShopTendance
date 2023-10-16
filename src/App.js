import React from'react';
import { useSelector } from 'react-redux';
import { isEmpty } from './components/Utils';
import './styles/index.css';
import Product from './components/Product';



function App() {
  const products = useSelector((state) => state.productReducer);


  return (
    <>
   <div className="content">
        <div className="product-card-container">
          {!isEmpty(products) &&
            products.map((product, index) => 
            <Product product={product} key={index} />
            )}
        </div>
      </div>
</>
  );
}

export default App;
