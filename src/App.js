import React from "react";
import ReactDOM from "react-dom";
import './styles/app.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";


function App() {
    return (
        // <div>It works</div>
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;