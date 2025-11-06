import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "../shared/ui/Title/Title";

export default function Albums(){

    const { id } = useParams()

    const albums = useAlbums(id)

    return (
        <>
            {albums.map(album => <Link key={album.id} to={'/albums/'+id+'/photos'}><Title size={1} style={'album-title'}>{album.title}</Title></Link>)}
        </>
    )

}

function useAlbums(id){

    const [ albums, setAlbums ] = useState([])

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users/'+id+'/albums')
            .then(res => res.json())
            .then(setAlbums)
        }, []
    )

    return albums;
}