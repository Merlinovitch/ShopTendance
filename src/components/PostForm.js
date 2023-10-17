import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../actions/product.action";
import { getProduct } from "../actions/product.action";

const PostForm = () => {
  const form = useRef();
  const product = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    const postData = {
      title: form.current[0].value,
      description: form.current[1].value,
      basePrice: form.current[2].value,
      salePrice: form.current[3].value,
      imageUrl: form.current[4].value,
    };

    await dispatch(addProduct(postData));
    dispatch(getProduct());
    form.current.reset();
  };

  return (
    <>
      <div className="form-container">
        <form
          className="custom-form"
          ref={form}
          onSubmit={(e) => handleForm(e)}
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
          <button type="submit" className="submit-button">
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
};

export default PostForm;
