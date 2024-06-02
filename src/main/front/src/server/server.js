const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db=require('./config/db')


app.get('/',(req,res)=>{
    console.log('/root')
})

app.get('/image',(req,res)=>{
    console.log('/image')
    db.query("select * from image", (err,data) =>{
        if(!err){
            //console.log(data)
            res.send(data)
            //respond, send
            //응답을 클라이언트 쪽으로 보낸다.
            // 서버에 있는 데이터를 다시 웹페이지로 리턴해줌
        }
        else{
            console.log(err)
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server On : http://localhost:${PORT}`)
})