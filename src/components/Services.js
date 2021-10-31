import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'



export default function Services() {
  return (
    <section id='services' className='services container'>
      <h2 className='main-title'>Tipos de ceremonias</h2>
      <div className='services__details flex-container'>

        <div className='services__item'>
          <div className='services__item-image'>
            <StaticImage src='../images/ceremonies/service-anillos.jpeg' alt='anillos' placeholder='blurred' width={350}
              height={240} />
          </div>
          <div className='services__item-content'>
            <h3 className='services__item-title'>Ceremonia de  los Anillos</h3>
            <p className='services__item-description'>
              El intercambio de anillos de boda es uno de los momentos más emocionantes
              en la ceremonia por la carga simbólica de estas joyas: amor eterno, infinito e inmortal.
            </p>
          </div>
        </div>

        <div className='services__item'>
          <div className='services__item-image'>

            <StaticImage src='../images/ceremonies/service-arras.jpeg' alt='arras' placeholder='blurred' width={350}
              height={240} />

          </div>
          <div className='services__item-content'>
            <h3 className='services__item-title'>Ceremonia de las Arras</h3>
            <p className='services__item-description'>
              Hoy en día este conjunto de monedas invoca al deseo de prosperidad. Pero también representa la promesa de compartir y proteger los bienes entre los novios,
              además de aceptar las responsabilidades que asumirán para que no le falte nada a su vida en matrimonio.
            </p>
          </div>
        </div>

        <div className='services__item'>
          <div className='services__item-image'>
            <StaticImage src='../images/ceremonies/service-lazos.jpeg' alt='lazos' placeholder='blurred' width={350}
              height={240} />

          </div>
          <div className='services__item-content'>
            <h3 className='services__item-title'>Ceremonia de los  lazos</h3>
            <p className='services__item-description'>
              En una boda, el lazo representa visualmente el vínculo inquebrantable entre los novios, esa fuerza que los une y los aparta del resto del mundo, protegiéndolos y vigorizando su alianza.
              Es la traducción material de esa conexión que solo ellos dos comparten.
            </p>
          </div>
        </div>


        <div className='services__item'>
          <div className='services__item-image'>
            <StaticImage src='../images/ceremonies/service-luz.jpeg' alt='arras' placeholder='blurred' width={350}
              height={240} />

          </div>
          <div className='services__item-content'>
            <h3 className='services__item-title'>Ceremonia de la Luz</h3>
            <p className='services__item-description'>
              Este ritual simboliza la unión de dos personas, dos vidas que se funden a través de esfuerzo y dedicación,
              dos personas que se convierten en una sola al casarse.
            </p>
          </div>
        </div>


        <div className='services__item'>
          <div className='services__item-image'>

            <StaticImage src='../images/ceremonies/service-arena.jpeg' alt='arras' placeholder='blurred' width={350}
              height={240} />

            {/* <img src={arena} /> */}
          </div>
          <div className='services__item-content'>
            <h3 className='services__item-title'>Ceremonia de las Arenas</h3>
            <p className='services__item-description'>
              El ritual simboliza la unión eterna entre dos personas que se aman y que desean estar siempre juntos. Realizar esta ceremonia es un símbolo más,
              como lo es llevar las alianzas hasta el altar.
            </p>
          </div>
        </div>


        <div className='services__item'>
          <div className='services__item-image'>
            <StaticImage src='../images/ceremonies/service-vows.jpg' alt='arras' placeholder='blurred' width={350}
              height={240} />
          </div>
          <div className='services__item-content'>
            <h3 className='services__item-title'>Renovacion de votos</h3>
            <p className='services__item-description'>
              Renovar los votos matrimoniales es confirmar y reafirmar el juramento de amor eterno, compromiso y fidelidad que la pareja hizo el día de su boda.
            </p>
          </div>
        </div>


        <div className='services__more-info'>
          <h3 className='main-title'>Mas Informacion</h3>
          <div className='services__price'>
            <p>
              Nuestros servicios estan disponibles en Manhattan,El Bronx, Brooklyn, Queens, Staten Island y Long Island;
              Para mas informacion de como personalizar su ceremonia y detalles  generales de nuestros servicios dentro y fuera de New York contactenos.
            </p>

          </div>

        </div>




      </div>


    </section >
  )
}
