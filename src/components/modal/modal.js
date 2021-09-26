import React from 'react'
import groundHog from '../../assets/happygroundhog.png'

// styles 
import './modal.css'

function Modal ({ closeModal, restartGame}) {
    const handleRestart = () => {
        restartGame()
        closeModal()
    }
    return (
        <div className='modal-background'>
            <section className='modal-content'>
                <h2 className='modal-text' >Congratulations! You won</h2>
                <img src={groundHog} alt='Happy groundhog'/>
                <div className='button-container'>
                <button onClick={handleRestart} >RESTART</button>
                <button onClick={closeModal} >CLOSE</button>
                </div>
            </section>
        </div>
    )
}

export default Modal