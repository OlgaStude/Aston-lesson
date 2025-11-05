export default function Comment({name, body}){
    return (
        <>
            <div className="comment">
                <h3>{name}</h3>
                <p>{body}</p>
            </div>
        </>
    )
}