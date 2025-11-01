import { UseTheme } from "../../../shared/lib/theme/useTheme";
import styles from "./styles.module.css"

export default function ThemeSwitcher(){

    const { isDark, switchTheme } = UseTheme();

    return (
        <>
        <label className={styles.switch}>
            <input type="checkbox" className={styles.input} onChange={switchTheme} checked={isDark} />
            <span className={styles.slider}></span>
        </label>
        </>
    )
}