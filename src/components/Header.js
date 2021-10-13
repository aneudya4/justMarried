import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import MobileMenu from './MobileNav'
export default function Header() {
    const [isMobile, setisMobile] = useState(null);
    const changeToMobile = () => {
        window.matchMedia('(min-width: 900px)').matches
            ? setisMobile(false)
            : setisMobile(true);
    };

    useEffect(() => {
        changeToMobile();
        window.addEventListener('resize', changeToMobile);
        return () => window.removeEventListener('resize', changeToMobile);
    }, []);



    return (
        <header className='container' >
            <Navigation />
            {isMobile && <MobileMenu />}
        </header >
    )
}
