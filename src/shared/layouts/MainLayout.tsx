import PostList from "../../widgets/PostList/PostList";
import { FilterProvider } from "../../features/PostLengthFilter/lib/filterByLength";
import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";
import { Outlet } from "react-router-dom";
import Tabs from "../../widgets/UserTabs/UserTabs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function MainLayout(){

    const queryClient = new QueryClient()

    return (
        <>
            <FilterProvider>
                <Header></Header>
                <Tabs></Tabs>
                <QueryClientProvider client={queryClient}>
                    <Outlet></Outlet>

                </QueryClientProvider>
                <Footer></Footer>
                
            </FilterProvider>
        </>
    )
}

export default MainLayout;