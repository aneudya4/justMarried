import React from 'react'
import { Link } from 'gatsby'
import { BsBookmarkCheck } from "react-icons/bs";

import roseRightTop3 from '../images/butterfly.png'





export default function Hero({ text, title, height }) {
    return (
        <div className='hero container'>
            <div className='hero__info flex-container' style={{ height: `${height}vh` }}>
                <p>{text}</p>


                <h2 className='main-title '>{title}</h2>

                {height === 70 && <>
                    <img src={roseRightTop3} alt='butterfly' className='hero__img hero__bottom__position hero__position__right' />

                    <div className='hero__cta'>
                        <Link to='/'><BsBookmarkCheck />Contact Us</Link>
                    </div>
                </>}



            </div>
        </div>
    )
}

Hero.defaultProps = {
    height: 70,
};
