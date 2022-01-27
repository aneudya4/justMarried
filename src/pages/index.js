import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import About from "../components/About"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import ComingSoon from "../components/ComingSoon"

export default function Home() {
  return (
    <ComingSoon />
    // <Layout>
    //   <SEO title="Home" />
    //   <Hero
    //     text="La oficiante ideal para tu ceremonia!"
    //     title="Just Married servicios para bodas."
    //   />
    //   <About />
    //   <Services />
    //   <Contact />
    // </Layout>
  )
}
