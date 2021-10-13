import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";

export default function MidBanner() {
    return (
        <div className='mid__banner'>
            <div className='mid__banner__info'>
                <AiOutlineHeart />
                <p><span>Fun Fact</span>  {" "}
                    We have hosted over  50 wedding in the tri state area . </p>
            </div>
        </div>
    )
}
