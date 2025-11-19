import { createPortal } from "react-dom";
import Button from "../Button/Button";
import { useModal } from "../../lib/modal/useModal";
import styles from './styles.module.css'
import type { PropsWithChildren, ReactNode, ReactPortal } from "react";

export default function Modal({ children }: PropsWithChildren): ReactPortal{
    return createPortal(
         <>{children}</>,
        document.getElementById('root-modal')
    )
}

Modal.Header = (): ReactNode => {
    return (
        <>
            <h2>Учебный проект</h2>
        </>
    )
}

Modal.Body = (): ReactNode => {
    return (
        <>
            <p>Сувориной Ольги</p>
        </>
    )
}

Modal.Container = ({children}: PropsWithChildren): ReactNode => {
    const { handleClick } = useModal<modalType>();


    return (
        <div className={styles.modalContainer}>
            <Button handleClick={handleClick} title='close' buttonClass="close-modal"></Button>
            {children}
        </div>
    )
}