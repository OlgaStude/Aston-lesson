import { NavLink } from "react-router-dom";
import styles from './styles.module.css'
import type { ReactNode } from "react";

export default function Tabs(): ReactNode{
    return (
        <>
            <NavLink className={( {isActive} ) => (isActive ? styles.active : '') } to="/posts">show posts</NavLink>
            <NavLink className={( {isActive} ) => (isActive ? styles.active : '') } to="/users">show users</NavLink>
        </>
    )
}