import styles from './styles.module.css'

export default function Body({children, style}){
    return <p className={styles[style]}>{children}</p>
}