import { createPortal } from "react-dom";
import Button from "../Button/Button";
import { useModal } from "../../lib/modal/useModal";
import styles from './styles.module.css'
import type { JSX, PropsWithChildren, ReactNode, ReactPortal } from "react";

export default function Modal({ children }: PropsWithChildren): ReactPortal{
    return createPortal(
         <>{children}</>,
        document.getElementById('root-modal')
    )
}

Modal.Header = (): JSX.Element => {
    return (
        <>
            <h2>Учебный проект</h2>
        </>
    )
}

Modal.Body = (): JSX.Element => {
    return (
        <>
            <p>Сувориной Ольги</p>
        </>
    )
}

Modal.Container = ({children}: PropsWithChildren): JSX.Element => {
    const { handleClick } = useModal<modalType>();


    return (
        <div className={styles.modalContainer}>
            <Button handleClick={handleClick} title='close' buttonClass="close-modal"></Button>
            {children}
        </div>
    )
}