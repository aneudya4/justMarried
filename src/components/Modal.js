import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

export default function Modal({ text, showModal, onClick }) {


    return (
        <div className={` ${showModal && 'show-modal'}`
        }>
            <div className='modal-content'>
                <IoMdCheckmarkCircleOutline />
                <p>
                    {text}
                </p>

                <button className='btn btn-primary' onClick={onClick}>
                    Volver a la pagina
                </button>
            </div>
        </div >
    )
}
