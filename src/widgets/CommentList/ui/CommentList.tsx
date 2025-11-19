import { useState, type ReactNode } from "react"
import Button from "../../../shared/ui/Button/Button"
import Comment from "../../../entities/comments/ui/Comment"
import { useLazyGetCommentsQuery } from "../../../entities/comments/api/commentsApi"
import type { commentsApiArgsType, commentType } from "../../../entities/comments/model/types"
import type { TypedLazyQueryTrigger } from "@reduxjs/toolkit/query/react"
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query"

type commentListType = {
    id: number
}

type getCommentsType = {
    comments: commentType[],
    buttonTitle: 'open' | 'close',
    handleClick: () => void
}

export default function CommentList({id}: commentListType): ReactNode{
    
    const [ getComments, { isError } ] = useLazyGetCommentsQuery()

    const { buttonTitle, handleClick, comments } = useComments(id, getComments)
   
    return (
        <>
            <div className="container">
                <Button handleClick={handleClick} title={buttonTitle} buttonClass={'comment-button'}></Button>
                {comments.map(comment => {
                    return <Comment key={comment.id} name={comment.name} body={comment.body}></Comment>
                })}
            </div>
        </>
    )
}

function useComments(id: number, getComments: TypedLazyQueryTrigger<commentType[], commentsApiArgsType, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>>): getCommentsType{
    const [comments, setCommnents] = useState<commentType[]>([])

    const [isOpen, toggle] = useState<boolean>(false)

    const [buttonTitle, switchTitle] = useState<'open' | 'close'>('open')

    const handleClick = async (): Promise<void> => {

        if(!isOpen){
            const {data: comments, isLoading} = await getComments({postId: id})

            if(!isLoading) setCommnents(comments)
            
        }
        else{
            setCommnents([])
        }

        toggle(!isOpen)
        switchTitle(isOpen ? 'open' : 'close')

    }

    return { comments, buttonTitle, handleClick }
}