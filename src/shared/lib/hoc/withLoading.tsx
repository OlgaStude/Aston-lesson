import type { ComponentType, JSX } from "react"

export function PostListWrapper<T>(PostListComponent: ComponentType<T>): (props: T) => JSX.Element{
    return function(props: T): JSX.Element{
        return<PostListComponent {...props}></PostListComponent>
    }
}