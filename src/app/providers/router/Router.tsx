import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../../shared/layouts/MainLayout";
import PostList from "../../../widgets/PostList/PostList";
import Post from "../../../pages/Post";
import Albums from "../../../pages/Albums";
import Todos from "../../../pages/Todos";
import Posts from "../../../pages/Posts";
import Photos from "../../../pages/Photos";
import Users from "../../../pages/Users";

export const MyRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      { path: 'posts', element: <PostList/> },
      { path: 'posts/:id', element: <Post/> },
      { path: 'users', element: <Users/> },
      { path: 'users/:id/albums', element: <Albums/> },
      { path: 'users/:id/todos', element: <Todos/> },
      { path: 'users/:id/posts', element: <Posts/> },
      { path: 'albums/:id/photos', element: <Photos/> },
    ]
  }
])