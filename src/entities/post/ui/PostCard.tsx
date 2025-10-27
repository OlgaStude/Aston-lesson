import styles from './PostCard.module.css'

interface Props{
    title: string,
    body: string
}

function PostCard({title, body}: Props){
    return (
        <>
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.body}>{body}</p>
        </div>
        </>
    )
}

export default PostCard;