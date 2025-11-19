import type { JSX } from 'react'
import styles from './styles.module.css'

type buttonType = {
    handleClick: () => void,
    title: string,
    buttonClass: string
}

export default function Button({ handleClick, title, buttonClass }: buttonType): JSX.Element{

    return <button onClick={handleClick} className={styles[buttonClass]}>{title}</button>
}