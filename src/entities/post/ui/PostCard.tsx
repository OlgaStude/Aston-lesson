import styles from './PostCard.module.css'
import CommentList from '../../../widgets/CommentList/ui/CommentList';
import { Link } from 'react-router-dom';
import Title from '../../../shared/ui/Title/Title';
import Body from '../../../shared/ui/Body/Body';

function PostCard({id, title, body}){
    return (
        <>
         <div className={styles.wrapper}>
                <Title style={'title'} size={3}><Link to={'/posts/'+id}>{title}</Link></Title>
                <Body style={'body'}>{body}</Body>
                <CommentList id={id}></CommentList>
            </div>
        </>
    )
}

export default PostCard;