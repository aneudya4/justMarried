import React from "react"

import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { AiOutlineFacebook } from "react-icons/ai"
import NavigationLinks from "../components/NavigationLinks"
export default function Navigation() {
  return (
    <nav className="navigation flex-container">
      <NavigationLinks />

      <h1 className="main-title">Just Married</h1>
      <div className="social">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/justmarried.yes/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram aria-label="Instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/justmarried.yes"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFacebook aria-label="Facebook" />
            </a>
          </li>
          <li>
            <a
              href="whatsapp://send?text=Necesito informacion&phone=+16462094776"
              rel="noreferrer"
              target="_blank"
            >
              <FaWhatsapp aria-label="whats-app" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
