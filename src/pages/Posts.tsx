import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "../shared/ui/Title/Title";

export default function Posts(){

    const { id } = useParams()

    const posts = usePosts(id)

    return (
        <>
            {posts.map(post => <Link key={post.id} to={'/posts/'+post.id}><Title size={1} style={'posts-title'}>{post.title}</Title></Link>)}
        </>
    )

}

function usePosts(id){
    const [ posts, setPosts ] = useState([])

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts')
                .then(res => res.json())
                .then(setPosts)
        }, []
    )

    return posts
}