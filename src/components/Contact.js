import React, { useState } from 'react'



export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
    })

    const handleOnChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })

    }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formData })
            })

            setFormData({
                name: '',
                email: '',
                message: '',
                phone: '',
            })
            await alert('done')
        } catch (error) {
            console.log(error)
        }


    }

    return (
        <section className='contact container' id='contact'>
            <div className='contact__form'>
                <h2 className='main-title'>Contactenos</h2>
                <p>Nuestro compromiso es hacer de ese día tan especial un momento inolvidable.  Contáctanos sin ningún compromiso y estaremos complacidos en poderte asistir con nuestros servicios.</p>
                <form className='flex-container' name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} >
                    <input type="hidden" name="form-name" value="contact" />
                    <input onChange={handleOnChange} name='name' type='text' placeholder='Nombre' />
                    <input onChange={handleOnChange} name='email' type='email' placeholder='Email' />
                    <input onChange={handleOnChange} name='phone' type='tel' placeholder='123-456-7890' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    <div className='contact__text-area'>
                        <textarea onChange={handleOnChange} name='message' placeholder='Mensaje...' rows="7" />
                    </div>
                    <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
                </form>
            </div>
        </section >
    )
}
