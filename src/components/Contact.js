import React, { useState } from "react"
import Form from "../components/Form"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

export default function Contact() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleFormSubmitted = () => {
    setIsFormSubmitted(true)
  }

  return (
    <section className="contact-section">
      <div className="contact container" id="contact">
        {!isFormSubmitted ? (
          <Form handleFormSubmitted={handleFormSubmitted} />
        ) : (
          <div className="contact__form-success contact__form">
            <IoMdCheckmarkCircleOutline />

            <h2>Gracias por contactarnos</h2>

            <div className="contact__form-success-text">
              <p>
                Hemos recibido su mensaje. Nos estaremos comunincando con usted
                pronto!
              </p>
              <button
                onClick={() => setIsFormSubmitted(false)}
                className="btn btn-primary"
              >
                Volver al formulario
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
