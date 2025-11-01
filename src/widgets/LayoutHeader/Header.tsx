import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import { useModal } from '../../shared/lib/modal/useModal';
import Button from '../../shared/ui/Button/Button';
import styles from './Header.module.css'

function Header({ children }){

    const {handleClick} = useModal()

    return (
        <>
            <header className={styles.header}>
                <Button handleClick={handleClick} title='About' buttonClass="about"></Button>
                <ThemeSwitcher></ThemeSwitcher>
                <p>My Homework project!</p>
            </header>
        </>
    )
}

export default Header;