import { useEffect, type JSX, type ReactNode } from "react";
import { useParams } from "react-router-dom";
import Title from "../shared/ui/Title/Title";
import Body from "../shared/ui/Body/Body";
import { fetchPost } from "../entities/post/model/slice/postSlice";
import { useAppDispatch, useAppSelector } from "../app/providers/store/store";
import type { postSelectorType } from "../entities/post/model/types";

export default function Post(): JSX.Element{

    const { id } = useParams()

    const { status, post } = usePost(id)

    if(status == 'loading') return <p>Loading...</p>

    return (
        <>
            <Title size={1} style={'post-title'}>{post.title}</Title>
            <Body style={'post-body'}>{post.body}</Body>
        </>
    )

}

function usePost(id: string | undefined): postSelectorType{
    const dispatch = useAppDispatch();

    const { status, post } = useAppSelector(state => state.post)

    useEffect(
      () => {
        dispatch(fetchPost(id))
      }, [id]
    )

    return { status, post }

}
