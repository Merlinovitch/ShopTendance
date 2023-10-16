import React from 'react'

const Product = ({ product }) => {
  return (
    <div className="product-card">
        <h2>{product.title}</h2>
        <img src={product.imageUrl} alt={product.title} />
        <p>{product.description}</p>
        <p>{product.basePrice}€</p>
        <p>{product.salePrice}€</p>

    </div>
  )
}

export default Product;



