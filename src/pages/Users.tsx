import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "../shared/ui/Title/Title";
import Body from "../shared/ui/Body/Body";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../entities/user/model/slice/userSlice";

export default function Users(){

    const dispatch = useDispatch();

    const { users, status } = useSelector(state => state.users)

    console.log(users)

    useEffect(
      () => {
        dispatch(fetchUsers())
      }, []
    )

    if(status == 'loading') return <p>Loading...</p>

    return (
        <>
            {users.map(user => <div key={user.id}>
                <Title size={1} style={'users-title'}>{user.name}</Title>
                
                <Link to={'/users/'+user.id+'/albums'}><Body style={'user-list-point'}>{user.name}'s albums</Body></Link>
                <Link to={'/users/'+user.id+'/posts'}><Body style={'user-list-point'}>{user.name}'s posts</Body></Link>
                <Link to={'/users/'+user.id+'/todos'}><Body style={'user-list-point'}>{user.name}'s todos</Body></Link>
            </div>)}
        </>
    )

}
