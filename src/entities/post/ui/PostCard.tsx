import styles from './PostCard.module.css'
import CommentList from '../../../widgets/CommentList/ui/CommentList';

function PostCard({id, title, body}){
    return (
        <>
         <div className={styles.wrapper}>
                <Title>{title}</Title>
                <Body>{body}</Body>
                <CommentList id={id}></CommentList>
            </div>
        </>
    )
}

function Title({children}){
    return <h3 className={styles.title}>{children}</h3>
}

function Body({children}){
    return <p className={styles.body}>{children}</p>
}

export default PostCard;