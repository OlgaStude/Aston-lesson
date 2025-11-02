import { useEffect, useState } from "react"
import { ModalContext } from "./useModal"

export function ModalProvider({ children }){

    const [ isModal, switchModal ] = useState(false);
    
    const handleClick = () => {
        switchModal(!isModal)
    }

    useEffect(
        () => {
            document.body.style.overflow = isModal ? 'hidden' : 'auto'
        }, [isModal]
    )

    return (
        <>
            <ModalContext value={{ isModal, handleClick }}>
                {children}
            </ModalContext>
        </>
    )

}