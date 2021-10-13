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
      <Hero text='Best Wedding Service Ever!!' title='All you need for your Wedding' />
      <About />
      <Services />
      <Contact />

    </Layout>
  )
}
