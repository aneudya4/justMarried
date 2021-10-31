import React from 'react'

import { FaRegEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className='container'>
            <div className='footer__details flex-container'>
                <div className='footer__details__item'>
                    <h3>Sobre Nosotros</h3>
                    <p>
                        Somos un grupo de oficiantes de matrimonio certificados y registrados por la ciudad de Nueva York
                        y es un honor poderte asesorar y a la vez acompañarte en este proceso tan memorable. Podemos celebrar
                        ceremonias civiles en Persona o Virtuales. También orientamos
                        para poder conseguir la licencia de matrimonios en la Ciudad de Nueva York por Proyecto Cupido.
                    </p>
                </div>
                <div className='footer__details__item'>
                    <h3>Site map</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>Servicios</a></li>
                        <li><a href='/gallery'>Galeria</a></li>
                        <li><a href='/'>Preguntas Frecuentes</a></li>
                        <li><a href='/'>Blog</a></li>
                        <li><a href='/'>Contactos</a></li>
                    </ul>
                </div>
                <div className='footer__details__item'>
                    <h3>Just Married</h3>
                    <a href="tel:+1-877-538-5888">(123)-456-7890</a>
                    <div className='social'>
                        <a href='https://www.instagram.com/' target='_blank' rel="noreferrer" ><FaInstagram aria-label="Instagram" /></a>
                        <a href='https://www.facebook.com/' target='_blank' rel="noreferrer" ><AiOutlineFacebook aria-label="Facebook" /></a>
                        <a href='whatsapp://send?text=Necesito informacion&phone=+10000000000' target='_blank' rel="noreferrer" ><FaWhatsapp aria-label="Whats-app" /></a>
                        <a href='mailto:someone@gmail.com' rel="noreferrer" ><FaRegEnvelope aria-label="E-mail" /></a>
                    </div>
                </div>
            </div>
            <div className='footer__copyright'>
                <p> Copyright &copy; {new Date().getFullYear()} Just Married. | Design by Aneudy Adames</p>
            </div>
        </footer >
    )
}
