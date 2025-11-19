import type { JSX, ReactNode } from "react"

type ListProps<T> = {
    items: T[],
    renderItems: (item: T) => ReactNode,
}

export function List<T>(prop: ListProps<T>): JSX.Element{
    const { items, renderItems } = prop

    return (
        <>
            {items.map(item => renderItems(item))}
        </>
    )
}