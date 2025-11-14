import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../shared/ui/Title/Title";
import Body from "../shared/ui/Body/Body";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../entities/post/model/slice/postSlice";

export default function Post(){

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

function usePost(id){
    const dispatch = useDispatch();

    const { status, post } = useSelector(state => state.post)

    useEffect(
      () => {
        dispatch(fetchPost(id))
      }, [id]
    )

    return { status, post }

}
