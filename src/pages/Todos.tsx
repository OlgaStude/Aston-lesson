import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../shared/ui/Title/Title";
import { useAddTodoMutation, useGetTodosQuery } from "../entities/todo/api/todosApi";
import Body from "../shared/ui/Body/Body";
import Button from "../shared/ui/Button/Button";

export default function Todos(){

    const { id } = useParams()

    const { data: todos, isLoading, isError, error } = useGetTodosQuery({userId: id})

    const [addTodo, {data, isSuccess}] = useAddTodoMutation()

    
    const handleClick = () => {
        addTodo({title: 'vika', userId: id, completed: false})
    }
    
    if (isLoading) return <Body style={'loading'}>Loading...</Body>;
    
    if (isError) return <Body style={'error'}>Something is wrong! {error.message}</Body>;   


    return (
        <>
            <Button handleClick={handleClick} title={'add Todo'} buttonClass={'add-todo'}></Button>
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