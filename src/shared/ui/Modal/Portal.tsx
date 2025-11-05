import { createPortal } from "react-dom";
import Button from "../Button/Button";
import { useModal } from "../../lib/modal/useModal";
import styles from './styles.module.css'

export default function Modal({ children }){
    return createPortal(
         <>{children}</>,
        document.getElementById('root-modal')
    )
}

Modal.Header = () => {
    return (
        <>
            <h2>Учебный проект</h2>
        </>
    )
}

Modal.Body = () => {
    return (
        <>
            <p>Сувориной Ольги</p>
        </>
    )
}

Modal.Container = ({children}) => {
    const { handleClick } = useModal();


    return (
        <div className={styles.modalContainer}>
            <Button handleClick={handleClick} title='close' buttonClass="close-modal"></Button>
            {children}
        </div>
    )
}