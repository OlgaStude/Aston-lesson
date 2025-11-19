import PostCard from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { type JSX } from "react";
import { useFilter } from "../../features/PostLengthFilter/lib/filterByLength";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { PostListWrapper } from "../../shared/lib/hoc/withLoading";
import Title from "../../shared/ui/Title/Title";
import { useGetPostsQuery } from "../../entities/post/api/postsApi";
import Body from "../../shared/ui/Body/Body";
import { List } from "../../shared/ui/ItemList/ItemList";

type filterType = {
    maxLenght: number,
    isOn: boolean
}

function PostListUnwrapped(): JSX.Element{

    const { data: posts, isLoading, isError, error } = useGetPostsQuery()

    const {maxLenght, isOn} = useFilter<filterType>()

    if (isLoading) return <Body style={'loading'}>Loading...</Body>;

    if (isError) return <Body style={'error'}>Something is wrong! {error.message}</Body>;

    return (
        <>
        <div className={styles.wrapper}>
            <Title style={'title'} size={1}>Dashboard</Title>
            <PostLengthFilter></PostLengthFilter>
            <List
                items={posts}
                renderItems={post => (!isOn || post.title.length <= maxLenght) && <PostCard key={post.id} id={post.id} title={post.title} body={post.body}></PostCard>}
            ></List>
        </div>
        </>
    )
}


const PostList = PostListWrapper(PostListUnwrapped)

export default PostList;