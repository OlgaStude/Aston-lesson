import PostCard from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { useState, useEffect } from "react";

function PostList(){

    const [posts, setPosts] = useState([]);

    const fetchData = async ()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        setPosts(data)
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )


    return (
        <>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Dashboard</h1>
            {posts.map(post => <PostCard key={post.id} title={post.title} body={post.body}></PostCard>)}
        </div>
        </>
    )
}

export default PostList;