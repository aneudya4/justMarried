import React, { useState } from "react"
import Modal from "../components/Modal"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  })

  const [showModal, setShowModal] = useState(false)
  const [isInvalid, setIsInvalid] = useState({ error: {} })
  const [isFormValid, setIsFormValid] = useState(null)
  const [errorSubmitting, setErrorSubmitting] = useState(false)

  const showModalConfirmation = () => {
    setShowModal(true)

    document.body.style.overflow = "hidden"
  }

  const validateForm = () => {
    const { name, message, phone } = formData
    const error = {}
    if (!name || name.trim() === "") {
      error.name = "Name is required"
    }
    if (!message || message.trim() === "") {
      error.message = "Message is required"
    }
    if (!phone || phone.trim() === "") {
      error.phone = "Phone is required"
    }

    setIsInvalid({ error })

    return Object.keys(error).length === 0
  }

  const handleOnChange = e => {
    if (e.target.name === "phone") {
      setFormData({ ...formData, [e.target.name]: e.target.value.trim() })
      return
    }
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!validateForm()) {
      setIsFormValid(false)
      return
    }
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      })

      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      })

      showModalConfirmation()
    } catch (error) {
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      })
      setErrorSubmitting(true)
    }
  }

  const onClick = () => {
    setShowModal(false)
    setErrorSubmitting(false)
    setIsFormValid(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section className="contact-section">
      <section className="contact container" id="contact">
        {showModal && (
          <Modal
            text="Gracias por contactarnos. Nos estaremos comunicando con usted pronto."
            showModal={showModal}
            onClick={onClick}
          />
        )}
        {errorSubmitting && (
          <Modal
            text="Hubo un error con el request, por favor tratar mas tarde"
            showModal={showModal}
            onClick={onClick}
          />
        )}

        <div className="contact__form">
          <h2 className="main-title">Contactenos</h2>
          <p>
            Nuestro compromiso es hacer de ese día tan especial un momento
            inolvidable. Contáctanos sin ningún compromiso y estaremos
            complacidos en poderte asistir con nuestros servicios.
          </p>
          {isFormValid === false && (
            <p className="error-msg">
              Por favor completar los campos requeridos
            </p>
          )}

          <form
            className="flex-container"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="input-container">
              <input
                onChange={handleOnChange}
                name="name"
                type="text"
                placeholder="Nombre"
                value={formData.name}
                required
                className={isInvalid.error.name && "is-invalid"}
              />
            </div>

            <div className="input-container">
              <input
                onChange={handleOnChange}
                name="phone"
                type="tel"
                placeholder="Telefono: 123-456-7890"
                value={formData.phone}
                className={isInvalid.error.phone && "is-invalid"}
                required
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </div>
            <input
              onChange={handleOnChange}
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
            />
            <div className="contact__text-area ">
              <textarea
                onChange={handleOnChange}
                name="message"
                required
                value={formData.message}
                className={isInvalid.error.message && "is-invalid"}
                placeholder="Mensaje..."
                rows="7"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </section>
  )
}
