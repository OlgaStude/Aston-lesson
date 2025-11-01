import { FilterProvider } from "../../features/PostLengthFilter/lib/filterByLength";
import PostList from "../../widgets/PostList/PostList";

function MainLayout(){
    return (
        <>
            <FilterProvider>
                <PostList></PostList>
            </FilterProvider>
        </>
    )
}

export default MainLayout;