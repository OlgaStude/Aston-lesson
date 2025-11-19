import type { JSX } from 'react';
import { useFilter } from '../../../features/PostLengthFilter/lib/filterByLength';

type inputType = {
    name: string,
    type: 'text' | 'number',
    style: string,
}

export default function Input({ name, type, style}: inputType): JSX.Element | undefined{

    if (type == 'text')
        return <input type="text" />
    if (type == 'number'){
        const { maxLenghtInput } = useFilter();

        return <input type="number" ref={maxLenghtInput} name={name} id="filter" />
    }
}