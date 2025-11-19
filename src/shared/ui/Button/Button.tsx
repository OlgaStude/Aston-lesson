import type { ReactNode } from 'react'
import styles from './styles.module.css'

type buttonType = {
    handleClick: () => void,
    title: string,
    buttonClass: string
}

export default function Button({ handleClick, title, buttonClass }: buttonType): ReactNode{

    return <button onClick={handleClick} className={styles[buttonClass]}>{title}</button>
}