import React from "react"
import { BsBookmarkCheck } from "react-icons/bs"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function Hero({ text, title, height }) {
  return (
    <div className="hero container">
      <div
        className="hero__info flex-container"
        style={{ height: `${height}vh` }}
      >
        <p>{text}</p>

        <h2 className="main-title ">{title}</h2>

        {height === 70 && (
          <>
            <div className="hero__img hero__bottom__position hero__position__right">
              <StaticImage
                src="../images/butterfly.png"
                alt="butterfly"
                placeholder="blurred"
              />
            </div>
            <div className="hero__cta">
              <AnchorLink to="/#contact">
                <BsBookmarkCheck />
                Contactanos
              </AnchorLink>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

Hero.defaultProps = {
  height: 70,
}
