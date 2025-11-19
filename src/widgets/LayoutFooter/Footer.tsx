import type { JSX, ReactNode } from 'react';
import styles from './Footer.module.css'

function Footer(): JSX.Element{
    return (
        <>
            <footer className={styles.footer}>
                Made by Olga.
            </footer>
        </>
    )
}

export default Footer;