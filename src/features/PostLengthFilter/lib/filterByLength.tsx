import { createContext, useContext, useRef, useState } from "react";

const FilterContext = createContext()

export const useFilter = () => {
    return useContext(FilterContext);
}

export const FilterProvider = ({children}) => {

    const maxLenghtInput = useRef(0);
    
    const [maxLenght, setMax] = useState(0);

    const [isOn, switchFilter] = useState(false)

    function filterPosts(){
        setMax(maxLenghtInput.current.value)
        switchFilter(true)
    }

    function clearFilter(){
        switchFilter(false)
        maxLenghtInput.current.value = ''
    }


    return <FilterContext value={{maxLenghtInput, maxLenght, filterPosts, isOn, clearFilter}}>
        {children}
    </FilterContext>
}