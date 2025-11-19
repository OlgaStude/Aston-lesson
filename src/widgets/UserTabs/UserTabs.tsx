import { NavLink } from "react-router-dom";
import styles from './styles.module.css'
import type { JSX, ReactNode } from "react";

export default function Tabs(): JSX.Element{
    return (
        <>
            <NavLink className={( {isActive} ) => (isActive ? styles.active : '') } to="/posts">show posts</NavLink>
            <NavLink className={( {isActive} ) => (isActive ? styles.active : '') } to="/users">show users</NavLink>
        </>
    )
}