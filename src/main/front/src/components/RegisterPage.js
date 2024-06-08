import React, { useState } from 'react';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/register", {
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
                // 추가적인 처리 (예: 성공 메시지 표시 또는 리다이렉트)
            })
            .catch((error) => {
                console.error("Error:", error);
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
            <form id="register-form" name="register" style={styles.form} onSubmit={handleSubmit}>
                <h1 className="register-title" style={styles.title}>회원가입</h1>
                <div id="username-field">
                    <label htmlFor="username" style={styles.label}>아이디</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="아이디"
                        style={styles.input}
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <div className="error-message"></div>
                </div>
                <div id="email-field">
                    <label htmlFor="email" style={styles.label}>이메일</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="이메일"
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
                <button type="submit" style={styles.button}>가입하기</button>
                <div className="register-message" style={styles.registerMessage}>
                    이미 회원이신가요? <a href="/LoginPage">로그인</a>
                </div>
            </form>
        </>
    );
}

export default RegisterPage;
