import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Home from './routes/home';
import List from './routes/list';
import PostNewItem from "./routes/postNewItem";


const App = () => {

    return (
        <div>
            <h1>React Memo App Demo</h1>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/list"}>List</Link>
                </li>
                <li>
                    <Link to={"/post"}>Post</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="/post" element={<PostNewItem />} />
            </Routes>
        </div>
    );
};

export default App;
