import { useFilter } from '../../../features/PostLengthFilter/lib/filterByLength';
import styles from './styles.module.css'

export default function Input({ name, type, style}){

    if (type == 'text')
        return <input type="text" />
    if (type == 'number'){
        const { maxLenghtInput } = useFilter();

        return <input type="number" ref={maxLenghtInput} name={name} id="filter" />
    }
}