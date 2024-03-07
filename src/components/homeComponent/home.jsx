import React from 'react'

import Header from '../componentsLayaout/header'
import Footer from '../componentsLayaout/footer'

import Text from './text';

import Chart from '../componentsLayaout/chartComponent/chart';

const Home = () => {
    return (
        <div className='home'>

            <Header />


            <aside>

                <hr />
                <h1 className="titulo-padre"> Sumo </h1>
                <hr />


                <a href="https://es.wikipedia.org/wiki/Sumo_(banda)#/media/Archivo:Sumo_1985.jpg" target="_blank">
                    <img src="./src/media/images.jpg" className="logo-sumo-2" alt="banda-sumo" /></a>

                <h2 className="titulo-historia">Un poco de su historia</h2>
                <br />

                <div className="descripcion">

                    <Text category="home" section="textHomeInicio" textKey="texto1" />

                    <Text category="home" section="textHomeInicio" textKey="texto2" />

                    <Text category="home" section="textHomeInicio" textKey="texto3" />

                    <Text category="home" section="textHomeInicio" textKey="texto4" />

                    <Text category="home" section="textHomeInicio" textKey="texto5" />

                    <Text category="home" section="textHomeInicio" textKey="texto6" />

                    <Text category="home" section="textHomeInicio" textKey="texto7" />

                    <Text category="home" section="textHomeInicio" textKey="texto8" />

                </div >

            </aside >


            <main className="caja-padre">

                <h2 className="titulo-discos">Sus tres discos</h2>

                <div className="primer-disco" >

                    <h4 className='titulo-disco'>

                        Divididos por la felicidad

                    </h4>



                    <a href="https://open.spotify.com/album/0iMPnRq7PL82Zrah0gTQBR" target="_blank"> <img src="./src/media/divididos-por-la-felicidad.jpg" alt="divididos-por-la-felicidad" className="imagen-dividos-por-la-felicidad imagen-dividos-por-la-felicidad-transicion" /></a>




                    <div className="textoConEspacio">

                        <Text category="home" section="textDisco" textId="disco1" textKey="texto1" />

                        <Text category="home" section="textDisco" textId="disco1" textKey="texto2" />

                    </div>

                </div >

                <div className="segundo-disco">

                    <h4 className='titulo-disco'>

                        Llegando los monos

                    </h4>



                    <a href="https://open.spotify.com/album/2kn0EF90FuahMHtPpwVsX4" target="_blank"><img src="./src/media/llegando-los-monos.jpg" alt="llegando-los-monos" className="imagen-llegando-los-monos imagen-llegando-los-monos-transicion" /></a>



                    <div className="textoConEspacio">

                        <Text category="home" section="textDisco" textId="disco2" textKey="texto1" />

                    </div>

                </div>

                <div className="tercer-disco">

                    <h4 className='titulo-disco'>

                        After chabon

                    </h4>



                    <a href="https://open.spotify.com/album/721cIV4PIWZSK5nZaYPvFy" target="_blank"> <img src="./src/media/descarga (2).jpg" alt="after-chabon" className="imagen-after-chabon imagen-after-chabon-transicion" /></a>



                    <div className="textoConEspacio">

                        <Text category="home" section="textDisco" textId="disco1" textKey="texto1" />

                        <Text category="home" section="textDisco" textId="disco1" textKey="texto2" />

                    </div>

                </div >

            </main >

            <Chart />

            <Footer />

        </div >
    );

};

export default Home;