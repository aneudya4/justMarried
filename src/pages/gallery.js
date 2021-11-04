import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default function Gallery({
  data: {
    events: { nodes },
  },
}) {
  return (
    <Layout>
      <SEO title="Galleria" />

      <Hero title="Ceremonias pasadas" text="Galeria de eventos" height={30} />
      <section className="gallery">
        <div className="container">
          <div className="gallery__imgs">
            {nodes.map(client => {
              return (
                <GatsbyImage
                  key={client.id}
                  image={getImage(client.clientsPicture)}
                  alt={client.clients}
                  as="div"
                  className="gallery__img"
                />
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    events: allContentfulEventsInfo(
      sort: { fields: contentful_id, order: DESC }
    ) {
      nodes {
        id
        clientsPicture {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 320
            height: 320
            placeholder: BLURRED
            resizingBehavior: NO_CHANGE
          )
        }
        clients
        eventDate
      }
    }
  }
`
