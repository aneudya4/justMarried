import React, { useState } from "react"
import validator from "validator"
import { formatPhoneNumber, encode } from "../utils/utils.js"
import { BiCommentError } from "react-icons/bi"
import Spinner from "./Spinner"
export default function Form({ handleFormSubmitted }) {
  const [isInvalid, setIsInvalid] = useState({ error: {} })
  const [isFormValid, setIsFormValid] = useState(null)
  const [errorSubmitting, setErrorSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  })

  const validateForm = () => {
    const { name, message, phone } = formData

    const error = {}

    if (!name || name.trim() === "") {
      error.name = "Name is required"
    }
    if (!message || message.trim() === "") {
      error.message = "Message is required"
    }
    if (!validator.isMobilePhone(phone, "en-US")) {
      error.phone = "Phone is required"
    }

    setIsInvalid({ error })

    return Object.keys(error).length === 0
  }

  const handleOnChange = e => {
    if (e.target.name === "phone") {
      const formattedPhoneNumber = formatPhoneNumber(e.target.value)

      setFormData({ ...formData, [e.target.name]: formattedPhoneNumber })
      return
    }
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!validateForm()) {
      setIsFormValid(false)
      return
    }
    try {
      setIsLoading(true)
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

      setErrorSubmitting(false)
      setIsFormValid(null)

      setTimeout(() => {
        handleFormSubmitted(true)
        setIsLoading(false)
      }, 2000)
    } catch (error) {
      setIsLoading(false)

      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      })
      setErrorSubmitting(true)
    }
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
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

          {!errorSubmitting ? (
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
                  placeholder="Telefono"
                  value={formData.phone}
                  className={isInvalid.error.phone && "is-invalid"}
                  required
                  // pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
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
          ) : (
            <div className="error-msg">
              <BiCommentError />
              <p>
                Tuvimos problemas para recibir su mensaje, por favor tratar mas
                tarde.
              </p>
            </div>
          )}
        </div>
      )}
    </>
  )
}
