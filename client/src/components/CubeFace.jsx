import React from 'react'
import '../css/CubeFace.css'

// A 3x3 grid of stickers in one cube color
const CubeFace = ({ color, className = '' }) => {
    return (
        <div className={`cube-face cube-${color} ${className}`} aria-hidden='true'>
            <div className='cube-face-grid'>
                {Array.from({ length: 9 }, (_, index) => <span key={index} className='sticker' />)}
            </div>
        </div>
    )
}

export default CubeFace
