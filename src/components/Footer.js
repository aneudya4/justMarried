import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

import { FaRegEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { AiOutlineFacebook } from "react-icons/ai"

export default function Footer() {
  return (
    <footer className=" footer-section">
      <div className=" container footer__details flex-container">
        <div className="footer__details__item">
          <h3>Sobre Nosotros</h3>
          <p>
            Somos un grupo de oficiantes de matrimonio certificados y
            registrados por la ciudad de Nueva York y es un honor poderte
            asesorar y a la vez acompañarte en este proceso tan memorable.
            Podemos celebrar ceremonias civiles en Persona o Virtuales. También
            orientamos para poder conseguir la licencia de matrimonios en la
            Ciudad de Nueva York por Proyecto Cupido.
          </p>
        </div>
        <div className="footer__details__item">
          <h3>Site map</h3>
          <ul>
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
        </div>
        <div className="footer__details__item">
          <h3>Just Married</h3>
          <a href="tel:+1-646-209-4776">(646)-209-4776</a>
          <div className="social">
            <a
              href="https://www.instagram.com/justmarried.yes/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram aria-label="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/justmarried.yes"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFacebook aria-label="Facebook" />
            </a>
            <a
              href="whatsapp://send?text=Necesito informacion&phone=+16462094776"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp aria-label="Whats-app" />
            </a>
            <a
              href="mailto:lis.justmarried@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaRegEnvelope aria-label="E-mail" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>
          Copyright &copy; {new Date().getFullYear()} Just Married. | Design by
          Aneudy Adames
        </p>
      </div>
    </footer>
  )
}
