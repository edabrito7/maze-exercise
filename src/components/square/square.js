import React from 'react'

import './square.css'

function Square ({ type, handleClick, index }) {
    const isDisabled = type === 'wall' || type === 'path' || type === 'passed'
    return (
        <button disabled={isDisabled} id={index} onClick={handleClick} className={type} >
            
        </button>
    )
}


export default Square