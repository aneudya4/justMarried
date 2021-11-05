import React, { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

export default function InformationItem({ question, children, idx }) {
  const [show, setShow] = useState(false)

  return (
    <div
      className="information__item"
      onClick={() => setShow(!show)}
      onKeyDown={() => setShow(!show)}
      role="button"
      tabIndex={idx}
    >
      <div className="information__icons">
        {show ? (
          <AiOutlineMinus className="information__active" />
        ) : (
          <AiOutlinePlus />
        )}
      </div>
      <h2 className={show && "information__active"}>¿{question}?</h2>
      {show && <>{children}</>}
    </div>
  )
}
