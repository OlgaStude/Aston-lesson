import styles from './styles.module.css'

export default function Title({children, size, style}){

    if (size == 1)
        return <h1 className={styles[style]}>{children}</h1>
    if (size == 2)
        return <h2 className={styles[style]}>{children}</h2>
    if (size == 3)
        return <h3 className={styles[style]}>{children}</h3>
}