import styles from './styles.module.css'

export default function Button({ handleClick, title, buttonClass }){

    return <button onClick={handleClick} className={styles[buttonClass]}>{title}</button>
}