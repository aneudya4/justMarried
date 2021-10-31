import React from 'react'
// import img from '../images/lis-about-1.jpeg'
// import lis from '../images/lis-people.jpeg'
// import couple from '../images/service-1.jpg'
import { StaticImage } from 'gatsby-plugin-image'

export default function About() {
    return (
        <section className='about container' id='about'>
            <h2 className='main-title'>Just Married</h2>
            <div className='about__details'>
                <h3>Una Ceremonia Inolvidable</h3>
                <div className='about__imgs flex-container'>
                    <div className='about__main__img'>
                        <StaticImage src='../images/Lissette.jpeg' alt='wedding' placeholder='blurred' />
                    </div>
                    <div className='about__side__imgs flex-container'>
                        {/* <img src={lis} alt='about' /> */}
                        <StaticImage src='../images/lis-about-1.jpeg' alt='wedding' placeholder='blurred'
                        />
                        <StaticImage src='../images/service-1.jpg' alt='wedding' placeholder='blurred'
                        />


                    </div>
                </div>
            </div>
        </section>
    )
}
