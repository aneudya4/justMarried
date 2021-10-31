import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
export default function ServiceCard({ ceremony }) {

    return (
        <div className='services__item'>
            <div className='services__item-image'>
                <GatsbyImage image={getImage(ceremony.serviceImage)} alt={ceremony.serviceTitle} placeholder='blurred' width={350}
                    height={240} />
            </div>
            <div className='services__item-content'>
                <h3 className='services__item-title'>{ceremony.serviceTitle}</h3>
                <p className='services__item-description'>
                    {ceremony.serviceDesc}
                </p>
            </div>
        </div>
    )
}
