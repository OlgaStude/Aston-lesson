import styles from './Header.module.css'
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import Button from '../../shared/ui/Button/Button';
import { useModal } from '../../shared/lib/modal/useModal';

function Header(){

    const {handleClick} = useModal()

    return (
        <>
            <header className={styles.header}>
                <Button handleClick={handleClick} title='About' buttonClass="about"></Button>
                <ThemeSwitcher></ThemeSwitcher>
                <Title></Title>
            </header>
        </>
    )
}

function Title(){
    return <p>My Homework project!</p>
}

export default Header;