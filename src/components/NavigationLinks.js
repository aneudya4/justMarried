import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function NavigationLinks() {
  return (
    <ul className="navigation__map">
      <li>
        <Link activeClassName="active__link" to="/">
          Home
        </Link>
      </li>
      <li>
        <AnchorLink to="/#services" title="About us" stripHash>
          Servicios
        </AnchorLink>
      </li>
      <li>
        <Link activeClassName="active__link" to="/gallery">
          Galeria
        </Link>
      </li>

      <li>
        <Link activeClassName="active__link" to="/information">
          Preguntas Frecuentes
        </Link>
      </li>

      <li>
        <AnchorLink to="/#contact" title="Contact us" stripHash>
          Contacto
        </AnchorLink>
      </li>
    </ul>
  )
}
