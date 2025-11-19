import type { ComponentType } from "react"

export function PostListWrapper<T>(PostListComponent: ComponentType<T>){
    return function(props: T){
        return<PostListComponent {...props}></PostListComponent>
    }
}