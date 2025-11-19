import type { Dispatch, JSX, ReactNode, SetStateAction } from "react";
import { UseTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./styles.module.css"

type themeType = {
    isDark: boolean,
    switchTheme: Dispatch<SetStateAction<boolean>>
}

export default function ThemeSwitcher(): JSX.Element{

    const { isDark, switchTheme } = UseTheme<themeType>();

    return (
        <>
        <label className={styles.switch}>
            <input type="checkbox" className={styles.input} onChange={switchTheme} checked={isDark} />
            <span className={styles.slider}></span>
        </label>
        </>
    )
}