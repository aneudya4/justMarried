import React from "react"
import Navigation from "./Navigation"
import MobileMenu from "./MobileNav"

export default function Header() {
  return (
    <header className="container">
      <Navigation />
      <MobileMenu />
    </header>
  )
}
