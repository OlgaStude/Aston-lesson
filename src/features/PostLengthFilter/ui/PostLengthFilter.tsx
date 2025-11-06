import Button from "../../../shared/ui/Button/Button";
import Input from "../../../shared/ui/Input/Input";
import { useFilter } from "../lib/filterByLength";

export default function PostLengthFilter(){

    const { filterPosts, clearFilter } = useFilter();

    return (
        <>
            <Input name={'filter'} type={'number'} style={'input-filter'}></Input>
            <Button title='fiter' buttonClass='filter-button' handleClick={filterPosts}></Button>
            <Button title='clear filter' buttonClass='filter-button' handleClick={clearFilter}></Button>
        </>
    )
}
