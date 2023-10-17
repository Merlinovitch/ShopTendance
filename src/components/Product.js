import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../actions/product.action";
import { deleteProduct } from "../actions/product.action";

const Product = ({ product }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [editContent, setEditContent] = useState(product.description);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    const productData = {
      id: product.id,
      title: product.title,
      description: editContent,
      basePrice: product.basePrice,
      salePrice: product.salePrice,
      imageUrl: product.imageUrl,
    };

    dispatch(editProduct(productData));
    setEditToggle(false);
  };

  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <div className="edit-delete">
        <svg
          class="feather feather-edit"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setEditToggle(!editToggle)}
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
        <svg
          class="feather feather-trash-2"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => dispatch(deleteProduct(product.id))}
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="10" x2="10" y1="11" y2="17" />
          <line x1="14" x2="14" y1="11" y2="17" />
        </svg>
      </div>
      <img src={product.imageUrl} alt={product.title} />
      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <textarea
            autoFocus={true}
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          ></textarea>
          <br />
          <input type="submit" value="Valider modification" />
        </form>
      ) : (
        <p>{product.description}</p>
      )}
      <p className="barre">{product.basePrice}€</p>
      <p className="price">{product.salePrice}€</p>
    </div>
  );
};

export default Product;
