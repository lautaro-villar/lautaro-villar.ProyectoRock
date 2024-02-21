import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <div>
      <header>
        <img src="./src/media/Logo-sumo-1.jpg" alt="sumo" className="Logo-sumo-1" />
        <nav>
          <div className="navegacion menu-responsive">
            {/* Mostrar "Inicio" solo si no estamos en la ruta raíz */}
            {location.pathname !== '/' && <NavLink className="botones primer-boton" to="/">Inicio</NavLink>}
            {/* Condicionales para no mostrar el enlace de la sección actual */}
            {location.pathname !== '/sobre-nosotros' && <NavLink className="botones segundo-boton" to="/sobre-nosotros">Sobre nosotros</NavLink>}
            {location.pathname !== '/integrantes' && <NavLink className="botones tercer-boton" to="/integrantes">Integrantes</NavLink>}
            {location.pathname !== '/logros' && <NavLink className="botones cuarto-boton" to="/logros">Logros</NavLink>}
            {location.pathname !== '/anecdotas' && <NavLink className="botones quinto-boton" to="/anecdotas">Anécdotas</NavLink>}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
