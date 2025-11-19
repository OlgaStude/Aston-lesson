import { useEffect, useState, type PropsWithChildren } from "react"
import { ModalContext } from "./useModal"

export function ModalProvider({ children }: PropsWithChildren){

    const [ isModal, switchModal ] = useState<boolean>(false);

    const handleClick = (e: MouseEvent): void => {
        console.log(e.target)
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