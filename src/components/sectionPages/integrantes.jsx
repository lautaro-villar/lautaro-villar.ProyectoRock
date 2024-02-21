import React from 'react'
import Header from '../componentsLayaout/header'
import Footer from '../componentsLayaout/footer'
import integrantesImage from '../../media/integrantes.png';

const integrantes = () => {
  return (
    <div className='body'>

<Header/>

<hr/>

    <h1 class="titulo-padre">Integrantes</h1>

    <main>

        <hr/>

        <aside>

            <img src={integrantesImage} class="logo-sumo-2" alt="banda-sumo"/>

            <h2 class="titulo-historia">Miembros:</h2>

            <ul>

                <li class="lista-integrantes">Voz: Luca Prodan † </li>
                <li class="lista-integrantes">Guitarra: German Daffuncio</li>
                <li class="lista-integrantes">Bajo: Diego Arnedo</li>
                <li class="lista-integrantes">Saxofon: Roberto Pettinato</li>
                <li class="lista-integrantes">Bateria: Alberto Troglio</li>
                <li class="lista-integrantes">Bajo y bateria: Alejandro Sokol † </li>

            </ul>

            <h4 class="titulo-historia"> Miembros anteriores</h4>

            <ul>

                <li class="lista-integrantes">Guitarra: Ricardo Curtet</li>
                <li class="lista-integrantes">Bateria: Stephanie Nuttal</li>

            </ul>

        </aside>
      
    </main>

<Footer/>


    </div>
  )
}

export default integrantes