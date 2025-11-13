import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../shared/ui/Title/Title";

export default function Photos(){

    const { id } = useParams()

    const photos = usePhotos(id)

    return (
        <>
            {photos.map(photo => <Title key={photo.id} size={1} style={'photo-title'}>{photo.title}</Title>)}
        </>
    )

}

function usePhotos(id){
    const [ photos, setPhotos ] = useState([])

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/albums/'+id+'/photos')
                .then(res => res.json())
                .then(setPhotos)
        }, []
    )

    return photos
}