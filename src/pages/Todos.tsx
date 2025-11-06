import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../shared/ui/Title/Title";

export default function Todos(){

    const { id } = useParams()

    const todos = useTodos(id)    

    return (
        <>
            {todos.map(todo => <Title key={todo.id} size={1} style={'todo-title'}>{todo.title}</Title>)}
        </>
    )

}

function useTodos(id){
    const [ todos, setTodos ] = useState([])

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users/'+id+'/todos')
                .then(res => res.json())
                .then(setTodos)
        }, []
    )

    return todos
}