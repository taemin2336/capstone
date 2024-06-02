import React from 'react';
import './App.css';
import axios from 'axios';
//axios 모듈에서 axios 함수를 불러온다.
//axios를 쓰는 목적은 서버에 데이터를 요청할때 비동기적으로 요청하려고

//함수형 컴포넌트
function App() {

    const selectAll=async ()=>{//화살표함수(arrow-function)
        alert("selectAll!")
        const result= await axios.get('/image')
        console.log(result)
        // 서버에 있는 데이터를 다시 웹페이지로 리턴해줌
    }

    return (
        <div id="App">
            <h1>React-Express-MySQL 연결</h1>
            <button onClick={selectAll}>모두조회</button>
        </div>
    );
}

export default App;