import { createContext, useContext, useRef, useState, type ContextType, type PropsWithChildren } from "react";

const FilterContext = createContext()

export const useFilter = (): ContextType<typeof FilterContext> => {
    return useContext(FilterContext);
}

export const FilterProvider = ({children}: PropsWithChildren) => {

    const maxLenghtInput = useRef<HTMLInputElement>(null);

    const [maxLenght, setMax] = useState<number | string>(0);

    const [isOn, switchFilter] = useState<boolean>(false)

    function filterPosts(): void{
        setMax(maxLenghtInput.current.value)
        switchFilter(true)
    }

    function clearFilter(): void{
        switchFilter(false)
        maxLenghtInput.current.value = ''
    }


    return <FilterContext value={{maxLenghtInput, maxLenght, filterPosts, isOn, clearFilter}}>
        {children}
    </FilterContext>
}