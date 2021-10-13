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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
