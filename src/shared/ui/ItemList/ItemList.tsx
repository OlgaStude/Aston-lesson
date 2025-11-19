import type { ReactNode } from "react"

type ListProps<T> = {
    items: T[],
    renderItems: (item: T) => ReactNode,
}

export function List<T>(prop: ListProps<T>): ReactNode{
    const { items, renderItems } = prop

    return (
        <>
            {items.map(item => renderItems(item))}
        </>
    )
}