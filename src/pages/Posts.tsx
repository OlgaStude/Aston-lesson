import { useEffect, useState, type JSX, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "../shared/ui/Title/Title";
import { List } from "../shared/ui/ItemList/ItemList";
import type { postType } from "../entities/post/model/types";

export default function Posts(): JSX.Element{

    const { id } = useParams()

    const posts = usePosts(id)

    return (
        <>
            <List 
                items={posts}
                renderItems={post => <Link key={post.id} to={'/posts/'+post.id}><Title size={1} style={'posts-title'}>{post.title}</Title></Link>}
            ></List>
        </>
    )

}

function usePosts(id: string | unknown): postType[]{
    const [ posts, setPosts ] = useState<postType[]>([])

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts')
                .then(res => res.json())
                .then((data: unknown) => {
                    setPosts(data as postType[])
                })
        }, []
    )

    return posts
}