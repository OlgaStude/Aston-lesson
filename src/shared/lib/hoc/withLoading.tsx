export function PostListWrapper(PostListComponent){
    return function(props){
        return<PostListComponent {...props}></PostListComponent>
    }
}