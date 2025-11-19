import { useEffect, useState, type JSX, type ReactNode } from "react";
import { useParams } from "react-router-dom";
import Title from "../shared/ui/Title/Title";
import type { photoType } from "../entities/photo/model/types";
import { List } from "../shared/ui/ItemList/ItemList";

export default function Photos(): JSX.Element{

    const { id } = useParams()

    const photos = usePhotos(id)

    return (
        <>
            <List
                items={photos}
                renderItems={photo => <Title key={photo.id} size={1} style={'photo-title'}>{photo.title}</Title>}
            ></List>
        </>
    )

}

function usePhotos(id: string | undefined): photoType[]{
    const [ photos, setPhotos ] = useState<photoType[]>([])

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/albums/'+id+'/photos')
                .then(res => res.json())
                .then((data: unknown) => {
                        setPhotos(data as photoType[])
                    })
        }, []
    )

    return photos
}