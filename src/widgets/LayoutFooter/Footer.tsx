import type { ReactNode } from 'react';
import styles from './Footer.module.css'

function Footer(): ReactNode{
    return (
        <>
            <footer className={styles.footer}>
                Made by Olga.
            </footer>
        </>
    )
}

export default Footer;