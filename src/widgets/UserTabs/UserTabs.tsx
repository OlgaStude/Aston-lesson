import { NavLink } from "react-router-dom";
import styles from './styles.module.css'

export default function Tabs(){
    return (
        <>
            <NavLink className={( {isActive} ) => (isActive ? styles.active : '') } to="/posts">show posts</NavLink>
            <NavLink className={( {isActive} ) => (isActive ? styles.active : '') } to="/users">show users</NavLink>
        </>
    )
}