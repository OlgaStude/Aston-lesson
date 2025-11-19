import { useEffect, type JSX } from "react";
import { Link } from "react-router-dom";
import Title from "../shared/ui/Title/Title";
import Body from "../shared/ui/Body/Body";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../entities/user/model/slice/userSlice";
import { List } from "@shared/ui/ItemList/ItemList";
import { useAppDispatch, useAppSelector } from "../app/providers/store/store";

export default function Users(): JSX.Element{

    const dispatch = useAppDispatch();

    const { users, status } = useAppSelector(state => state.users)

    useEffect(
      () => {
        dispatch(fetchUsers())
      }, []
    )

    if(status == 'loading') return <p>Loading...</p>

    return (
        <>
          <List 
              items={users}
              renderItems={user => <div key={user.id}>
                <Title size={1} style={'users-title'}>{user.name}</Title>
                
                <Link to={'/users/'+user.id+'/albums'}><Body style={'user-list-point'}>{user.name}'s albums</Body></Link>
                <Link to={'/users/'+user.id+'/posts'}><Body style={'user-list-point'}>{user.name}'s posts</Body></Link>
                <Link to={'/users/'+user.id+'/todos'}><Body style={'user-list-point'}>{user.name}'s todos</Body></Link>
            </div>}
          ></List>
        </>
    )

}
