import React, { useState } from 'react';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/login", { // 서버의 주소로 변경해야 함
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((json) => {
                console.log("Success:", json);
                alert("로그인 성공");
                // 로그인에 성공하면 이메일 정보를 로컬 스토리지에 저장
                localStorage.setItem('loggedInUser', JSON.stringify({ email: formData.email }));
                window.location.href = "/Main"; // 또는 리액트 라우터를 사용하여 페이지 전환
                // 로그인 성공 시 추가 작업을 수행할 수 있습니다
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("로그인 실패");
            });
    };

    const styles = {
        form: {
            margin: '140px auto',
            width: '350px',
        },
        title: {
            fontSize: '30px',
            textAlign: 'left',
        },
        label: {
            display: 'block',
            margin: '24px 0 8px',
            textAlign: 'left',
        },
        input: {
            display: 'block',
            width: '100%',
            margin: '8px 0',
            borderRadius: '6px',
            border: '1px solid #e5e5e5',
            fontSize: '14px',
            padding: '11px 15px',
        },
        button: {
            display: 'block',
            width: '100%',
            margin: '24px 0',
            backgroundColor: 'black',
            borderRadius: '6px',
            border: 'none',
            color: 'white',
            fontSize: '16px',
            padding: '10px',
            textAlign: 'center',
        },
        registerMessage: {
            color: '#ababab',
            margin: '24px 0',
            textAlign: 'center',
        },
    };

    return (
        <>
            <form id="login-form" name="login" style={styles.form} onSubmit={handleLogin}>
                <h1 className="login-title" style={styles.title}>로그인</h1>
                <div id="email-field">
                    <label htmlFor="email" style={styles.label}>아이디</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email"
                        style={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div className="error-message"></div>
                </div>
                <div id="password-field">
                    <label htmlFor="password" style={styles.label}>비밀번호</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="비밀번호"
                        style={styles.input}
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <div className="error-message"></div>
                </div>
                <button type="submit" style={styles.button}>로그인</button>
                <div className="register-message" style={styles.registerMessage}>
                    아직 회원이 아니신가요? <a href="/">회원가입</a>
                </div>
            </form>
        </>
    );
}

export default LoginPage;
