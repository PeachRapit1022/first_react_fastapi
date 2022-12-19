import React from "react";
//import axios from "axios";
import { Routes, Route, Link } from 'react-router-dom';

import Home from './routes/home';
import TestPost from './routes/testPost';
import TestPut from './routes/testPut';
import TestList from './routes/testList';


function App() {

    return (
        <div>
            <h1>React Memo App Demo</h1>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/list"}>testList</Link>
                </li>
                <li>
                    <Link to={"/post"}>testPost</Link>
                </li>
                <li>
                    <Link to={"/put"}>testPut</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<TestList />} />
                <Route path="/post" element={<TestPost />} />
                <Route path="/put" element={<TestPut />} />
            </Routes>
        </div>
    );
}

export default App;
