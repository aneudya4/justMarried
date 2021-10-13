import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function InformationItem({ question, children }) {
    const [show, setShow] = useState(false)

    return (
        <div className='information__item'>
            <div className='information__icons'>
                {show ? <AiOutlineMinus onClick={() => setShow(false)} className='information__active' /> :

                    <AiOutlinePlus onClick={() => setShow(true)} />}
            </div>
            <h2 className={`${show ? 'information__active' : null}`}>¿{question}?</h2>
            {show && <>
                {children}
            </>}
        </div>
    )
}
