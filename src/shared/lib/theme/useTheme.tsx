import { createContext, useContext } from "react";

export const ThemeContext = createContext();

export function UseTheme(){
    return useContext(ThemeContext);
}