import { useEffect, useState } from "react";
import { ThemeContext } from "./useTheme";

export function ThemeProvider({ children }){

    const [ isDark, switchIsDark ] = useState(false);

    function switchTheme(){
        switchIsDark(!isDark)
    }

    useEffect(
        () => {
            document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
        }, [isDark]
    )

    return (
        <>
            <ThemeContext value={{ isDark, switchTheme }}>
                {children}
            </ThemeContext>
        </>
    )
}