import PostCard from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useFilter } from "../../features/PostLengthFilter/lib/filterByLength";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { PostListWrapper } from "../../shared/lib/hoc/withLoading";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";
import { useQuery } from "@tanstack/react-query";
import Title from "../../shared/ui/Title/Title";
import { useGetPostsQuery } from "../../entities/post/api/postsApi";
import Body from "../../shared/ui/Body/Body";

function PostListUnwrapped(){

    const { data: posts, isLoading, isError, error } = useGetPostsQuery()

    const {maxLenght, isOn} = useFilter()

    if (isLoading) return <Body style={'loading'}>Loading...</Body>;

    if (isError) return <Body style={'error'}>Something is wrong! {error.message}</Body>;

    return (
        <>
        <div className={styles.wrapper}>
            <Title style={'title'} size={1}>Dashboard</Title>
            <PostLengthFilter></PostLengthFilter>
            {posts.map(post => (!isOn || post.title.length <= maxLenght) && <PostCard key={post.id} id={post.id} title={post.title} body={post.body}></PostCard>)}
        </div>
        </>
    )
}


const PostList = PostListWrapper(PostListUnwrapped)

export default PostList;