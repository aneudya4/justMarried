import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function About() {
  return (
    <section className="about-section">
      <div className="about container" id="about">
        <h2 className="main-title">Just Married</h2>
        <div className="about__details">
          <h3>Una Ceremonia Inolvidable</h3>
          <div className="about__imgs flex-container">
            <div className="about__main__img">
              <StaticImage
                src="../images/lisette.jpeg"
                alt="wedding"
                placeholder="blurred"
              />
              <div className="about__main-title">
                <h2>Oficiante de bodas Lissette Marte </h2>
              </div>
            </div>
            <div className="about__side__imgs flex-container">
              <StaticImage
                src="../images/lis-about-1.jpeg"
                alt="wedding"
                placeholder="blurred"
              />
              <StaticImage
                src="../images/service-1.jpg"
                alt="wedding"
                placeholder="blurred"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
