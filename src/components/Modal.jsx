import React from 'react'
import { createPortal } from 'react-dom'
import Box from './Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

function Modal({
    show,
    closeModal,
    children
}) {
  return (
        show ?
            createPortal(
                <Box className="modal__overlay" role="button" onClick={closeModal} onScroll={ e => e.preventDefault () }>
                    <Box className="modal__content" onClick={ e => e.stopPropagation () }>
                        <Box className="d-flex justify-end">
                            <button className="modal__close">
                                <FontAwesomeIcon icon={faClose} onClick={closeModal} size='xl'/>
                            </button>
                        </Box>
                        {children}  
                    </Box>
                </Box>,
                document.body
            )
        : undefined 
    )
}

export default Modal