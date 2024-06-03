import React from 'react';
import './App.css';
import axios from 'axios';
import LoginPage from "./components/LoginPage";

//함수형 컴포넌트
function App() {
    return (
        <div id="App">
            <LoginPage /> {/* LoginForm 컴포넌트를 사용 */}
        </div>
    );
}

export default App;

