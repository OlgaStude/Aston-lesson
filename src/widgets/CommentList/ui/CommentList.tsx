import { useCallback, useEffect, useMemo, useState } from "react"
import Button from "../../../shared/ui/Button/Button"
import Comment from "../../../entities/comments/ui/Comment"

export default function CommentList({id}){
    const [comments, setCommnents] = useState([])

    const [isOpen, toggle] = useState(false)

    const [buttonTitle, switchTitle] = useState('open')

    const getComments = useCallback(
        async () => {

            const controller = new AbortController()
            if(!isOpen){
                const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments', {signal: controller.signal})
                const data = await res.json()
                setCommnents(data)
            }
            else{
                setCommnents([])
            }

            toggle(!isOpen)
            switchTitle(isOpen ? 'open' : 'close')

            return () => controller.abort()

        }, [id, isOpen]
    )


    return (
        <>
            <div className="container">
                <Button handleClick={getComments} title={buttonTitle} buttonClass={'comment-button'}></Button>

                {comments.map(comment => {
                    return <Comment key={comment.id} name={comment.name} body={comment.body}></Comment>
                })}
            </div>
        </>
    )
}