const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "capstone",
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// 회원가입
app.post("/register", (req, res) => {
    const { username, email, password } = req.body;

    // Check if email already exists
    connection.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
        if (err) {
            console.error("DB 조회 실패:", err);
            return res.status(500).json({ message: "DB 조회 실패" });
        }

        if (results.length > 0) {
            return res.status(400).json({ message: "email이 중복입니다" });
    }

        // If username is unique, proceed to insert new user
        connection.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, password], (err, results) => {
            if (err) {
                console.error("DB 저장 실패:", err);
                return res.status(500).json({ message: "DB 저장 실패" });
            }
            console.log("DB 저장 성공");
            res.status(200).json({ message: "회원가입 성공" });
        });
    });
});

// 로그인
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Check if email and password match a user in the database
    connection.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, results) => {
        if (err) {
            console.error("DB 조회 실패:", err);
            return res.status(500).json({ message: "DB 조회 실패" });
        }

        if (results.length === 0) {
            return res.status(400).json({ message: "이메일 또는 비밀번호가 일치하지 않습니다." });
        }else{
            console.log("로그인 성공");
            res.status(200).json({ message: "로그인 성공" });
        }
    });
});


app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
