import React from "react";
//import axios from "axios";
import { Routes, Route, Link } from 'react-router-dom';

import Home from './routes/home';
import TestGet from './routes/testGet';
import TestPost from './routes/testPost';
import TestPut from './routes/testPut';
import TestDelete from './routes/testDelete';
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
                    <Link to={"/get"}>testGet</Link>
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
                <li>
                    <Link to={"/delete"}>testDelete</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/get" element={<TestGet />} />
                <Route path="/list" element={<TestList />} />
                <Route path="/post" element={<TestPost />} />
                <Route path="/put" element={<TestPut />} />
                <Route path="/delete" element={<TestDelete />} />
            </Routes>
        </div>
    );
}

export default App;
