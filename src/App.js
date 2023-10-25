import React from "react";
import "./styles/index.css";
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
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <PostForm />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hommes" element={<Hommes />} />
          <Route path="/Femmes" element={<Femmes />} />
          <Route path="/Enfants" element={<Enfants />} />
          <Route path="/Ados" element={<Ados />} />
          <Route path="/Bebes" element={<Bebes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
