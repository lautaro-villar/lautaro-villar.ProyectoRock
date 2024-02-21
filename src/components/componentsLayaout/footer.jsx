import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* Corrección: className debe recibir un string directamente, no una expresión con llaves */}
      <footer className="bg-dark text-center text-white">
        <nav>
          <ul className="redes-sociales">
            <li>
              <a href="https://www.instagram.com/lauty.villar_/" target="_blank" rel="noopener noreferrer">
                <img src="./src/media/instagram-logo.png" alt="instagram" className="instagram" />
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/lola.rojas.31542/" target="_blank" rel="noopener noreferrer">
                <img src="./src/media/facebook-logo.png" alt="facebook" className="facebook" />
              </a>
            </li>

            <li>
              <a href="https://twitter.com/LoluchiRojas" target="_blank" rel="noopener noreferrer">
                <img src="./src/media/twitter-logo.jpg" alt="twitter" className="twitter" />
              </a>
            </li>
          </ul>
        </nav>

        {/* Corrección: style debe ser un objeto */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2022 Copyright:
          {/* Se añade rel="noopener noreferrer" por seguridad y performance al usar target="_blank" */}
          <a className="text-white" href="https://lautaro-villar.github.io/segunda-entrega/" rel="noopener noreferrer">https://Pagina-oficial-de-Sumo/</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
