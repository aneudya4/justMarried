import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
export default function Gallery({ data: { events: { nodes } } }) {
  return (
    <Layout>
      <SEO title='Galleria' />

      <Hero title='See our past ceremonies' text='Galeria de eventos' height={30} />
      <section className='gallery container'>
        <div className='gallery__imgs'>

          {nodes.map((client => {
            return (<GatsbyImage key={client.id} image={getImage(client.clientsPicture)} alt={client.clients} as='div' className='gallery__img' />
            )
          }))}





        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    events: allContentfulEventsInfo {
      nodes {
        id
        clientsPicture {
          gatsbyImageData(layout: CONSTRAINED,placeholder: TRACED_SVG)
        }
        clients
        eventDate
      }
    }
  }
`