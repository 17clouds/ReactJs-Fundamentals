// eslint-disable-next-line
import React, {useEffect, useMemo, useRef, useState} from "react";
import'./styles/app.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";

function App() {

    const [posts,setPosts] = useState([])
    const [filter, setFilter] = useState({sort:'', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [isPostsLoading, setIsPostsLoading] = useState(false);

    useEffect(() => {
        fetchPosts()
    },[])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    
    async function fetchPosts() {
        setIsPostsLoading(true);
        setTimeout(async () => {
            const posts = await PostService.getAll();
            setPosts(posts)
            setIsPostsLoading(false);
        }, 2000)

    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
    <div className="App">
        <MyButton style={{marginRight:10}} onClick={fetchPosts}>GET POSTS</MyButton>
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
            Create Post
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>


        <hr style={{margin: '15px 0'}}/>

        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />

        {isPostsLoading
            ?<div style={{display: 'flex', justifyContent: 'center',marginTop: 50}}><Loader/></div>
            :<PostList remove={removePost} posts={sortedAndSearchedPosts} title={'JS List'}/>
        }
    </div>
  );
}

export default App;

