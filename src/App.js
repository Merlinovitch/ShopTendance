import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./components/Utils";
import "./styles/index.css";
import Product from "./components/Product";
import PostForm from "./components/PostForm";
import Hommes from "./components/Hommes";
import Femmes from "./components/Femmes";
import Ados from "./components/Ados";
import Enfants from "./components/Enfants";
import Bebes from "./components/Bebes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const products = useSelector((state) => state.productReducer);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hommes" element={<Hommes />} />
          <Route path="/Femmes" element={<Femmes />} />
          <Route path="/Enfants" element={<Enfants />} />
          <Route path="/Ados" element={<Ados />} />
          <Route path="/Bebes" element={<Bebes />} />
        </Routes>
      </BrowserRouter>
      <div>
        <PostForm />
      </div>
      <div className="content">
        <div className="product-card-container">
          {!isEmpty(products) &&
            products.map((product, index) => (
              <Product product={product} key={index} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
