import type { PropsWithChildren } from 'react'
import styles from './styles.module.css'

type titleType = {
    size: 1 | 2 | 3,
    style: string
}

export default function Title({children, size, style}: PropsWithChildren<titleType>){

    if (size == 1)
        return <h1 className={styles[style]}>{children}</h1>
    if (size == 2)
        return <h2 className={styles[style]}>{children}</h2>
    if (size == 3)
        return <h3 className={styles[style]}>{children}</h3>
}