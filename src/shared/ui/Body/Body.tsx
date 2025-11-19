import type { JSX, PropsWithChildren, ReactNode } from 'react'
import styles from './styles.module.css'

type styleType = {
    style: string
}

export default function Body({children, style}: PropsWithChildren<styleType>): JSX.Element{
    return <p className={styles[style]}>{children}</p>
}