import React from "react";
import { Routes, Route } from "react-router-dom";

// Ajustando las rutas de importación basadas en la estructura de carpetas proporcionada
import Home from '../homeComponent/home'; // Subir un nivel y luego entrar en homeComponent
import Anecdotas from '../sectionPages/anecdotas'; // Subir un nivel y luego entrar en sectionPages
import Integrantes from '../sectionPages/integrantes'; // Subir un nivel y luego entrar en sectionPages
import Logros from '../sectionPages/logros'; // Subir un nivel y luego entrar en sectionPages
import SobreNosotros from '../sectionPages/sobreNosotros'; // Subir un nivel y luego entrar en sectionPages

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anecdotas" element={<Anecdotas />} />
      <Route path="/integrantes" element={<Integrantes />} />
      <Route path="/logros" element={<Logros />} />
      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      {/* Agrega más rutas según sea necesario */}
    </Routes>
  );
};

export default AppRoutes;
