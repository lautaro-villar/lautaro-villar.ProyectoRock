import React from 'react'
import Header from '../componentsLayaout/header'
import Footer from '../componentsLayaout/footer'
import integrantesImage from '../../media/integrantes.png';

const integrantes = () => {
  return (
    <div className='body'>

<Header/>

<hr/>

    <h1 className="titulo-padre">Integrantes</h1>

    <main>

        <hr/>

        <aside>

            <img src={integrantesImage} className="logo-sumo-2" alt="banda-sumo"/>

            <h2 className="titulo-historia">Miembros:</h2>

            <ul>

                <li className="lista-integrantes">Voz: Luca Prodan † </li>
                <li className="lista-integrantes">Guitarra: German Daffuncio</li>
                <li className="lista-integrantes">Bajo: Diego Arnedo</li>
                <li className="lista-integrantes">Saxofon: Roberto Pettinato</li>
                <li className="lista-integrantes">Bateria: Alberto Troglio</li>
                <li className="lista-integrantes">Bajo y bateria: Alejandro Sokol † </li>

            </ul>

            <h4 className="titulo-historia"> Miembros anteriores</h4>

            <ul>

                <li className="lista-integrantes">Guitarra: Ricardo Curtet</li>
                <li className="lista-integrantes">Bateria: Stephanie Nuttal</li>

            </ul>

        </aside>
      
    </main>

<Footer/>


    </div>
  )
}

export default integrantes