import PostCard from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useFilter } from "../../features/PostLengthFilter/lib/filterByLength";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { PostListWrapper } from "../../shared/lib/hoc/withLoading";

function PostListUnwrapped(){

    const [posts, setPosts] = useState([]);

     useMemo(
        async ()=>{
            const controller = new AbortController()
            const res = await fetch('https://jsonplaceholder.typicode.com/posts', {signal: controller.signal})
            const data = await res.json()
            setPosts(data)
            return () => controller.abort()
        }, []
    )

    const {maxLenght, isOn} = useFilter()

    return (
        <>
        <div className={styles.wrapper}>
            <Title></Title>
            <PostLengthFilter></PostLengthFilter>
            {posts.map(post => (!isOn || post.title.length <= maxLenght) && <PostCard key={post.id} id={post.id} title={post.title} body={post.body}></PostCard>)}
        </div>
        </>
    )
}

function Title(){
    return <h1 className={styles.title}>Dashboard</h1>
}

const PostList = PostListWrapper(PostListUnwrapped)

export default PostList;