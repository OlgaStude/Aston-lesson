import { useEffect, useState, type PropsWithChildren } from "react";
import { ThemeContext } from "./useTheme";

export function ThemeProvider({ children }: PropsWithChildren){

    const [ isDark, switchIsDark ] = useState<boolean>(false);

    function switchTheme(): void{
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