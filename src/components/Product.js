import React from 'react'

const Product = ({ product }) => {
  return (
    <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
    </div>
  )
}

export default Product;



