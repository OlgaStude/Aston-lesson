import { useEffect, useState, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "../shared/ui/Title/Title";
import { useGetAlbumsQuery } from "../entities/album/api/albumsApi";
import Body from "../shared/ui/Body/Body";
import { List } from "../shared/ui/ItemList/ItemList";

export default function Albums(): ReactNode{

    const { id } = useParams()

    const { data: albums, isLoading, isError, error } = useGetAlbumsQuery({userId: id})
  
    if (isLoading) return <Body style={'loading'}>Loading...</Body>;
    
    if (isError) return <Body style={'error'}>Something is wrong! {error.message}</Body>;

    return (
        <>
            <List
                items={albums}
                renderItems={album => <Link key={album.id} to={'/albums/'+id+'/photos'}><Title size={1} style={'album-title'}>{album.title}</Title></Link>}
            ></List>
        </>
    )

}
