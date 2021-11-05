import React, { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

export default function InformationItem({ question, children }) {
  const [show, setShow] = useState(false)

  return (
    <div className="information__item" onClick={() => setShow(!show)}>
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
