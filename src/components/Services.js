import React from 'react'
import ServiceCard from './ServiceCard'
import { useStaticQuery, graphql } from "gatsby"


export default function Services() {

  const { services } = useStaticQuery(graphql`
    {
      services:allContentfulServicesInfo {
        nodes {
          serviceDesc
          serviceTitle
          serviceImage {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              resizingBehavior: NO_CHANGE
            )
          }
          id
        }
      }
    }
  `)

  return (
    <section id='services' className='services container'>
      <h2 className='main-title'>Tipos de ceremonias</h2>
      <div className='services__details flex-container'>


        {services.nodes.map(ceremony => {
          return (<ServiceCard key={ceremony.id} ceremony={ceremony} />)
        })}


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
