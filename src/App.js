
import React, {useRef, useState} from "react";
import'./styles/app.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {

    const [posts,setPosts] = useState([
        {id:1, title: 'JavaScript 1', body: 'Description'},
        {id:2, title: 'JavaScript 2', body: 'Description'},
        {id:3, title: 'JavaScript 3', body: 'Description'},
    ])

    const [title, setTitle] = useState('')
    const bodyInputRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(bodyInputRef.current.value)
    }

    return (
    <div className="App">

        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value ={title}
                onChange = {e => setTitle((e.target.value))}
                type="text"
                placeholder={'name of post '}
            />
            {/*Неуправляемый/Неконтролируемый компонент*/}
            <MyInput
                ref={bodyInputRef}
                type="text"
                placeholder={'description'}
            />
            <MyButton onClick={addNewPost} >Create post</MyButton>
        </form>

        <PostList posts={posts} title={'JS List'}/>

    </div>
  );
}

export default App;

