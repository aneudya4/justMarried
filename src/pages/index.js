import React from "react"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import About from "../components/About"
import Services from '../components/Services'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
// import './main.css'
export default function Home() {
  return (
    <Layout>
      <SEO title='Home' />
      <Hero text='El mejor servicio de bodas!' title='Todo lo que necesitas para tu boda.' />
      <About />
      <Services />
      <Contact />

    </Layout>
  )
}
