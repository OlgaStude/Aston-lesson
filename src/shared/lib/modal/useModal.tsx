import { createContext, useContext, type ContextType } from "react";

export const ModalContext = createContext()

export function useModal(): ContextType<typeof ModalContext>{
    return useContext(ModalContext)
}