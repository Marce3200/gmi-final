
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import QuienesSomos from "./componentes/QuienesSomos/QuienesSomos";
import Home from "./componentes/Home"
import Contacto from "./componentes/Contacto/Contacto";
// import ErrorPage from "./components/ErrorPage/ErrorPage";
import Layout from "./componentes/Layout";
import Servicios from "./componentes/Servicios/Servicios";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/contacto" element={<Contacto />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
};

export default App;