import React from 'react'
import Header from '../componentsLayaout/header'
import Footer from '../componentsLayaout/footer'
import nosotrosImage from '../../media/nosotros.jpg'

const sobreNosotros = () => {
  return (
    <div className='body'>

      <Header />

      <hr />

      <h1 class="titulo-padre">Bienvenidos!</h1>

      <main>

        <hr />

        <aside>

          <div class="imagen-aside">

            <img src={nosotrosImage} class="logo-sumo-2" alt="banda-sumo" />

            <h2 class="titulo-historia">Quienes somos?</h2>

          </div>

          <div className="descripcion">

            <p>Nosotros somos la pagina oficial de sumo, una institucion sin fines de lucro que tiene como objetivo rememorar este historico grupo, aqui encontraras todo lo que quieres saber sobre ellos, una banda inactiva pero que sigue presente en nuestros corazones</p>

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