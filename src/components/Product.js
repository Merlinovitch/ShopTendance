import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../actions/product.action";
import { deleteProduct } from "../actions/product.action";

const Product = ({ product }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [editContent, setEditContent] = useState(product.description);
  const [editSalePrice, setEditSalePrice] = useState(product.salePrice);
  const [editTitle, setEditTitle] = useState(product.title);
  const [editImageUrl, setEditImageUrl] = useState(product.imageUrl);
  const [editCategories, setEditCategories] = useState(product.categories);

  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    const productData = {
      id: product.id,
      title: editTitle,
      description: editContent,
      basePrice: product.basePrice,
      salePrice: editSalePrice,
      imageUrl: editImageUrl,
      categories: editCategories,
    };

    dispatch(editProduct(productData));
    setEditToggle(false);
  };

  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <div className="edit-delete">
        <svg
          className="feather feather-edit"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setEditToggle(!editToggle)}
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
        <svg
          className="feather feather-trash-2"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
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
        <form className="edit" onSubmit={(e) => handleEdit(e)}>
          <div className="edit-input">
            Titre de l'article : <br />
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </div>
          <div className="edit-input">
            Description :<br />
            <input
              type="text"
              autoFocus={true}
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            ></input>
          </div>

          <div className="edit-input">
            {" "}
            Prix soldé :<br />
            <input
              type="text"
              value={editSalePrice}
              onChange={(e) => setEditSalePrice(e.target.value)}
            />
          </div>
          <div className="edit-input">
            Photo :<br />
            <input
              type="text"
              value={editImageUrl}
              onChange={(e) => setEditImageUrl(e.target.value)}
            />
            <div className="edit-input">
              <br />
              Categorie :<br />
              <select
                placeholder="Catégorie"
                className="edit-select"
                value={editCategories}
                onChange={(e) => setEditCategories(e.target.value)}
              >
                <option value="Hommes">Hommes</option>
                <option value="Femmes">Femmes</option>
                <option value="Enfants">Enfants</option>
                <option value="Ados">Ados</option>
                <option value="Bébés">Bébés</option>
              </select>
            </div>
            <br />
            <button type="submit" value="Valider modification">
              Valider
            </button>
          </div>
        </form>
      ) : (
        <>
          <p>{product.description}</p>
          <p className="barre">{product.basePrice}€</p>
          <p className="price">{product.salePrice}€</p>
        </>
      )}
    </div>
  );
};

export default Product;
