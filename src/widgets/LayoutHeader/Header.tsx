import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import Button from '../../shared/ui/Button/Button';
import styles from './Header.module.css'

function Header({ children }){
    return (
        <>
            <header className={styles.header}>
                {children}
                <ThemeSwitcher></ThemeSwitcher>
                <p>My Homework project!</p>
            </header>
        </>
    )
}

export default Header;