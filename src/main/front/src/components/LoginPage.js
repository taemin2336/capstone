import React from 'react';

const LoginPage = () => {
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
            <form id="login-form" name="login" style={styles.form}>
                <h1 className="login-title" style={styles.title}>로그인</h1>
                <div id="email-field">
                    <label htmlFor="id" style={styles.label}>아이디</label>
                    <input id="id" name="id" type="email" placeholder="아이디" style={styles.input} />
                    <div className="error-message"></div>
                </div>
                <div id="password-field">
                    <label htmlFor="password" style={styles.label}>비밀번호</label>
                    <input id="password" name="password" type="password" placeholder="비밀번호" style={styles.input} />
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