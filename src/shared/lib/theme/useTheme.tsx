import { createContext, useContext, type ContextType } from "react";

export const ThemeContext = createContext();

export function UseTheme(): ContextType<typeof ThemeContext>{
    return useContext(ThemeContext);
}