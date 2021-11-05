import React from "react"
import Header from "./Header"
import Footer from "../components/Footer"

import "../pages/main.css"
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
