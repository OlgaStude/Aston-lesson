import { useCallback, useEffect, useMemo, useState } from "react"
import Button from "../../../shared/ui/Button/Button"
import Comment from "../../../entities/comments/ui/Comment"
import { useGetCommentsQuery, useLazyGetCommentsQuery } from "../../../entities/comments/api/commentsApi"

export default function CommentList({id}){
    
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

function useComments(id, getComments){
    const [comments, setCommnents] = useState([])

    const [isOpen, toggle] = useState(false)

    const [buttonTitle, switchTitle] = useState('open')

    const handleClick = async () => {

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