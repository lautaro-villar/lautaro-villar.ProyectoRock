import React from 'react'

import Header from '../componentsLayaout/header'
import Footer from '../componentsLayaout/footer'

import anecdotasImage from '../../media/anecdotas.jpg';

import Text from '../homeComponent/text';

const anecdotas = () => {

  return (

    <div className='body'>

      <Header />

      <hr />

      <h1 className="titulo-padre">Anécdotas</h1>

      <main>

        <hr />

        <aside>

          <div>

            <div className="imagen-aside">

              <img src={anecdotasImage} className="logo-sumo-2" alt="banda-sumo" />

              <h2 className="titulo-historia">Anécdotas</h2>

              <br />

            </div>

            <div className="descripcion">

              <h4>Quiero dinero</h4>

              <br />

              <Text category="textSectionPages" section="anecdotas" textId="anecdota1" textKey="text1" />

              <Text category="textSectionPages" section="anecdotas" textId="anecdota1" textKey="text2" />

              <Text category="textSectionPages" section="anecdotas" textId="anecdota1" textKey="text3" />

              <Text category="textSectionPages" section="anecdotas" textId="anecdota1" textKey="text4" />

            </div>

            <br />

            <div className="descripcion">

              <h4>Un público canino</h4>

              <br />

              <Text category="textSectionPages" section="anecdotas" textId="anecdota2" textKey="text1" />

              <Text category="textSectionPages" section="anecdotas" textId="anecdota2" textKey="text2" />

              <Text category="textSectionPages" section="anecdotas" textId="anecdota2" textKey="text3" />

              <Text category="textSectionPages" section="anecdotas" textId="anecdota2" textKey="text4" />

            </div>

            <br />

            <div className="descripcion">

              <h4>Acústico en la comisaría</h4>

              <br />

              <Text category="textSectionPages" section="anecdotas" textId="anecdota3" textKey="text1" />

              <Text category="textSectionPages" section="anecdotas" textId="anecdota3" textKey="text2" />

              <Text category="textSectionPages" section="anecdotas" textId="anecdota3" textKey="text3" />

              <Text category="textSectionPages" section="anecdotas" textId="anecdota3" textKey="text4" />

            </div>

            <br />

          </div>

        </aside>

      </main>

      <Footer />

    </div>

  )

}

export default anecdotas