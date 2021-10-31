import React from 'react'



export default function Contact() {
    return (
        <section className='contact container' id='contact'>
            <div className='contact__form'>
                <h2 className='main-title'>Contactenos</h2>
                <p>Nuestro compromiso es hacer de ese día tan especial un momento inolvidable.  Contáctanos sin ningún compromiso y estaremos complacidos en poderte asistir con nuestros servicios.</p>
                <form className='flex-container'>

                    <input type='text' placeholder='Nombre' />
                    <input type='text' placeholder='Email' />
                    <input type='tel' placeholder='123-456-7890' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    <div className='contact__text-area'>
                        <textarea placeholder='Mensaje...' rows="7" />
                    </div>
                    <button className='btn btn-primary'>Enviar Mensaje</button>
                </form>
            </div>
        </section>
    )
}
