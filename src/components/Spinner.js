import React from 'react'

export default function Spinner() {
    return (
        <div className='spinner'>
            <svg viewBox='-70 -70 140 140' xmlns='http://www.w3.org/2000/svg'>
                <text x="-32" y="5" fill="black">Loading</text>

                <defs>
                    <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x2="1" y2='-.5' >
                        <stop stop-color="#000000" />
                        <stop stop-color="#d7636f" />
                        <animateTransform attributeName="gradientTransform" dur="2s" type="rotate" values="0; 360" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0.25 0.36 0.75" />
                    </linearGradient>
                </defs>
                <path stroke='url(#gradient)' stroke-dasharray='90' stroke-width='16' stroke-linecap='round' fill='none' stroke-opacity='0.35' d='M-5 -61a10 10 0 0110 0l45 26a10 10 0 015 9v52a10 10 0 01-5 9L15 61a10 10 0 01-10 0l-45-26a10 10 0 01-5-9v-52a10 10 0 015-9z'>
                    <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" calcMode='spline' values="360; 0" keySplines="0.64 0.25 0.36 0.75" />
                </path>
            </svg>
        </div>

    )
}
