import { useState } from 'react'

export function useModal () {
    const [modal, setModal] = useState(false)

    const openModal = (count) => {
        setModal(true)
        console.log(count)
        // here send count to API
    }

    const closeModal = () => {
        setModal(false)
    }

    return {
        modal,
        openModal,
        closeModal
    }
}