import React, {useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Main from "./components/Main.js";
import Main_Post from "./components/Main_Post";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";


//함수형 컴포넌트
function App() {

    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(res => console.log(res))
            .catch()
    })

    return (
        <Routes>
            <Route path="/" element={<RegisterPage />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Main_Post" element={<Main_Post />} />
            <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
    );
}

export default App;

