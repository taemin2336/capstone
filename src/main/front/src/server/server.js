const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const connection = mysql.createConnection({
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

    connection.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
        if (err) {
            console.error("DB 조회 실패:", err);
            return res.status(500).json({ message: "DB 조회 실패" });
        }

        if (results.length > 0) {
            return res.status(400).json({ message: "email이 중복입니다" });
        }

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

    connection.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, results) => {
        if (err) {
            console.error("DB 조회 실패:", err);
            return res.status(500).json({ message: "DB 조회 실패" });
        }

        if (results.length === 0) {
            return res.status(400).json({ message: "이메일 또는 비밀번호가 일치하지 않습니다." });
        } else {
            console.log("로그인 성공");
            res.status(200).json({ message: "로그인 성공" });
        }
    });
});

// 프로필 수정 업로드
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// 업로드 디렉토리가 존재하지 않으면 생성
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// 프로필 업데이트를 처리하는 라우트
app.post('/updateProfile', upload.single('profileImage'), (req, res) => {
    const { nickname, bio } = req.body;
    const profileImage = req.file ? req.file.path : null;

    console.log('Received data:', { nickname, bio, profileImage });

    const sql = 'INSERT INTO profiles (nickname, bio, profile_image) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE nickname=VALUES(nickname), bio=VALUES(bio), profile_image=VALUES(profile_image)';
    const values = [nickname, bio, profileImage];

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.json({ message: 'Profile updated successfully' });
    });
});

// 프로필 가져오기
app.post("/getProfile", (req, res) => {
    const { email } = req.body;

    connection.query("SELECT * FROM profiles WHERE user_email = ?", [email], (err, results) => {
        if (err) {
            console.error("DB 조회 실패:", err);
            return res.status(500).json({ message: "DB 조회 실패" });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: "프로필을 찾을 수 없습니다." });
        }

        // 프로필 정보를 클라이언트에게 반환
        res.status(200).json(results[0]);
    });
});



app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
