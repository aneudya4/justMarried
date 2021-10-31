import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from "../components/Footer"
import Fade from 'react-reveal/Fade';
import '../pages/main.css'
import Spinner from '../components/Spinner'
export default function Layout({ children }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [isLoading])
    return (
        <>
            <Header />
            <Fade duration={1800}>
                <main>
                    {children}
                </main>
            </Fade>
            <Footer />

        </>
    )
}
