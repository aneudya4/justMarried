import React, { useState, useEffect } from "react"
import Navigation from "./Navigation"
import MobileMenu from "./MobileNav"
import ScrollableNav from "./ScrollableNav"

export default function Header() {
  const [scroll, setScroll] = useState(false)

  const changeBackground = () => {
    setScroll(window.scrollY >= 50)
  }

  useEffect(() => {
    let mounted = true
    if (mounted) {
      window.addEventListener("scroll", changeBackground)
    }

    return function cleanup() {
      mounted = false
      window.removeEventListener("scroll", changeBackground)
    }
  }, [])
  return (
    <header className="container">
      <Navigation />
      {scroll && <ScrollableNav />}
      <MobileMenu />
    </header>
  )
}
