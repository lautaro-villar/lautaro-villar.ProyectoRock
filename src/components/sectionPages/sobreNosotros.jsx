import React from 'react'

import Header from '../componentsLayaout/header'
import Footer from '../componentsLayaout/footer'

import nosotrosImage from '../../media/nosotros.jpg'

import Text from '../homeComponent/text'

const sobreNosotros = () => {
  return (
    <div className='body'>

      <Header />

      <hr />

      <h1 className="titulo-padre">Bienvenidos!</h1>

      <main>

        <hr />

        <aside>

          <div className="imagen-aside">

            <img src={nosotrosImage} className="logo-sumo-2" alt="banda-sumo" />

            <h2 className="titulo-historia">Quienes somos?</h2>

          </div>

          <div className="descripcion">
           
           <Text category="textSectionPages" section="sobreNosotros" textKey="text1" /> 

            <p>"#LucaNOTdead</p>
            <p>"#Dividos? </p>
            <p>"#Las pelotas!</p>

          </div>

        </aside>

      </main>

      <Footer />

    </div>
  )
}

export default sobreNosotros