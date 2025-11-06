import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

export function usePosts(){
    
    const { isLoading, error, data } = useQuery({
        queryKey: ['posts'],
        queryFn: () => {return fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
            const posts = res.json()
            return posts;
        })},
    }
    );

    return { data, isLoading, error }
}