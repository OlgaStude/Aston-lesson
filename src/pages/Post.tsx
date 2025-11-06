import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../shared/ui/Title/Title";
import Body from "../shared/ui/Body/Body";

export default function Post(){

    const { id } = useParams()

    const post = usePost(id)

    return (
        <>
            <Title size={1} style={'post-title'}>{post.title}</Title>
            <Body style={'post-body'}>{post.body}</Body>
        </>
    )

}

function usePost(id){

    const [ post, setPost ] = useState([])

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/posts/'+id)
                .then(res => res.json())
                .then(setPost)
        }, []
    )

    return post
}