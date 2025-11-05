import PostList from "../../widgets/PostList/PostList";
import { FilterProvider } from "../../features/PostLengthFilter/lib/filterByLength";
import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";


function MainLayout(){
    return (
        <>
            <FilterProvider>
                <Header></Header>
                <PostList></PostList>
                <Footer></Footer>
                
            </FilterProvider>
        </>
    )
}

export default MainLayout;