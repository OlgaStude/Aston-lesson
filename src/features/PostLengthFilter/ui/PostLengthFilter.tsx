import Button from "../../../shared/ui/Button/Button";
import { useFilter } from "../lib/filterByLength";

export default function PostLengthFilter(){

    const { filterPosts, clearFilter } = useFilter();

    return (
        <>
            <Input></Input>
            <Button title='fiter' buttonClass='filter-button' handleClick={filterPosts}></Button>
            <Button title='clear filter' buttonClass='filter-button' handleClick={clearFilter}></Button>
        </>
    )
}

function Input(){
    const { maxLenghtInput} = useFilter();

    return <input type="number" ref={maxLenghtInput} name="filter" id="filter" />
}