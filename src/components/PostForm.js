import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/product.action";
import { getProduct } from "../actions/product.action";
import { isEmpty } from "./Utils";
import { useState } from "react";

const PostForm = () => {
  const form = useRef();
  const dispatch = useDispatch();
  const [afficherForm, setAfficherForm] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();

    const postData = {
      title: form.current[0].value,
      description: form.current[1].value,
      basePrice: form.current[2].value,
      salePrice: form.current[3].value,
      imageUrl: form.current[4].value,
      categories: form.current[5].value,
    };
    if (
      isEmpty(postData.title) ||
      isEmpty(postData.description) ||
      isEmpty(postData.basePrice) ||
      isEmpty(postData.salePrice) ||
      isEmpty(postData.imageUrl)
    ) {
      alert("Veuillez remplir tous les champs");
      form.current.reset();
      return;
    }

    await dispatch(addProduct(postData));
    dispatch(getProduct());
  };
  const changerForm = () => {
    setAfficherForm(!afficherForm);
  };
  return (
    <>
      <div className="ajouter-article-container">
        <button className="ajouter-article" onClick={changerForm}>
          Ajouter un article
        </button>
      </div>
      {afficherForm && (
        <div className="form-container">
          <p>Ajouter un article</p>
          <form
            className="custom-form"
            ref={form}
            onSubmit={(e) => {
              changerForm();
              handleForm(e);
            }}
          >
            <input
              type="text"
              name="Nom de l'article"
              placeholder="Nom de l'article"
              className="form-input"
            />
            <input
              type="text"
              name="Description de l'article"
              placeholder="Description de l'article"
              className="form-input"
            />
            <input
              type="text"
              name="Prix de base de l'article"
              placeholder="Prix de base de l'article"
              className="form-input"
            />
            <input
              type="text"
              name="Prix soldé de l'article"
              placeholder="Prix soldé de l'article"
              className="form-input"
            />
            <input
              type="text"
              name="Photo de l'article"
              placeholder="Url de la photo"
              className="form-input"
            />
            <select className="form-input" placeholder="Catégorie">
              <option value="Hommes">Hommes</option>
              <option value="Femmes">Femmes</option>
              <option value="Enfants">Enfants</option>
              <option value="Ados">Ados</option>
              <option value="Bébés">Bébés</option>
            </select>
            <button type="submit" className="submit-button">
              Envoyer
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default PostForm;
