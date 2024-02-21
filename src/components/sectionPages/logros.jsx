import React from 'react'
import Header from '../componentsLayaout/header'
import Footer from '../componentsLayaout/footer'
import logrosImage from '../../media/logros.jpg'

const logros = () => {
  return (

    <div className='body'>

      <Header />

      <hr />

      <h1 class="titulo-padre">Logros</h1>

      <main>

        <hr />

        <aside>

          <div class="imagen-aside">

            <img src={logrosImage} class="logo-sumo-2" alt="banda-sumo" />

          </div>

          <h2 class="titulo-historia">Logros de la banda</h2>

          <br />

          <p class="descripcion">Sumo, a pesar de mantenerse underground en su corto período de actividad, se volvería uno de los grupos más influyentes en moldear el rock argentino contemporáneo. Se le acredita por introducir el post-punk británico en la escena latinoamericana, más que nada por sus canciones con letras en inglés, y por brindar un contrapunto visceral a las influencias progresivas y de nueva canción entonces dominantes en el rock en español.</p>

          <p class="descripcion">En el verano de 1987, tomaron parte del Festival Rock in Balí en Mar del Plata, donde pasaron grandes bandas, como Soda Stereo, Virus, Los Violadores y solistas como Pedro Aznar y Andrés Calamaro, etc.), que se realizó el 24 de enero de 1987. El lugar concreto del festival fueron las playas de Santa Clara del Mar, (Beach Balí), en cercanías de Mar del Plata, donde unas 4000 personas concurrieron. La nueva placa se editó durante ese año, pero la adicción de Luca por la heroína había cambiado por la ginebra, con lo cual su salud estaba muy deteriorada. De este disco se destacan temas como «Mañana en el Abasto», «Hola Frank», «Crua Chan» y «Lo quiero ya», entre otros. Presentaron After Chabón en el estadio Obras Sanitarias el 10 de octubre ante más de 4.000 personas. Como invitados aparecieron en escena Tito Fargo, Semilla Bucciarelli, Andrés Calamaro y Geniol Con Coca. La última actuación del grupo, con Luca a la cabeza, se realizó el 20 de diciembre de 1987 en la cancha de Los Andes, junto a Los Violadores. Mollo recordó más tarde que esa noche, ante poco más de 500 personas, momentos antes de ejecutar una poderosa versión de «Fuck You», Luca dijo: "Ahí va la última". Así fue. Dos días después, el 22 de diciembre lo encontraron muerto en su casa, ubicada en la calle Alsina 451, a causa de un paro cardíaco. Tenía 34 años y una cirrosis irreversible, causada por su alcoholismo.</p>

          <br />

        </aside>

      </main >

      <Footer />

    </div >

  )
}

export default logros