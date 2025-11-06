import styles from './Header.module.css'
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import Button from '../../shared/ui/Button/Button';
import { useModal } from '../../shared/lib/modal/useModal';
import Title from '../../shared/ui/Title/Title';

function Header(){

    const {handleClick} = useModal()

    return (
        <>
            <header className={styles.header}>
                <Button handleClick={handleClick} title='About' buttonClass="about"></Button>
                <ThemeSwitcher></ThemeSwitcher>
                <Title size={3} style={'header'}>My Homework project!</Title>
            </header>
        </>
    )
}

export default Header;