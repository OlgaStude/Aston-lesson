import styles from './Header.module.css'
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import Button from '../../shared/ui/Button/Button';

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