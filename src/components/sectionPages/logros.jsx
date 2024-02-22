import React from 'react';
import Header from '../componentsLayaout/header';
import Footer from '../componentsLayaout/footer';
import logrosImage from '../../media/logros.jpg';
import Text from '../homeComponent/text';

const logros = () => {
  return (
    <div className='body'>
      <Header />
      <hr />
      <h1 className="titulo-padre">Logros</h1>
      <main>
        <hr />
        <aside>
          <div className="imagen-aside">
            <img src={logrosImage} className="logo-sumo-2" alt="banda-sumo" />
          </div>
          <h2 className="titulo-historia">Logros de la banda</h2>
          <br />
          <div className="descripcion">
            <Text category="textSectionPages" section="logros" textKey="text1" />
            <Text category="textSectionPages" section="logros" textKey="text2" />
          </div>
          <br />
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default logros;
