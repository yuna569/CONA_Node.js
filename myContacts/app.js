const express = require("express");
const path = require("path");
const app = express();      //"express 객체를 실행?" 모듈 자체를 실행? // app은 서버 이름
const port = 3000;

app.get("/", (require, respond)=>{
    respond.status(200);
    respond.send("Hello Node!");
})

app.get("/contacts", (require, respond)=>{
    respond.status(200).send("Contacts Page");
})

app.post("/contacts", (require, respond)=>{
    respond.status(201).send("Create Contacts");
})

app.get("/contacts/:id", (require, respond)=>{
    respond.status(200).send(`View Contactfor ID: ${require.params.id}`);
})

app.put("/contacts/:id", (require, respond)=>{
    respond.status(200).send(`Update Contact for ID: ${require.params.id}`);
})

app.delete("/contacts/:id", (require, respond)=>{
    respond.status(200).send(`Delete Contact for ID: ${require.params.id}`);
})

app.listen(port, ()=>{
    console.log(`${port}번 포트에서 서버 실행 중`);
})