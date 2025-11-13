import Body from "../../../shared/ui/Body/Body";
import Title from "../../../shared/ui/Title/Title";

export default function Comment({name, body}){
    return (
        <>
            <div className="comment">
                <Title size={3} style={'comment-title'}>{name}</Title>
                <Body style={'comment-body'}>{body}</Body>
            </div>
        </>
    )
}