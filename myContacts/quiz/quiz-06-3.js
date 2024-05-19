// " /" 경로로 접속하면 "Welcome"을 표시하고
// "/about" 경로로 접속하면 "This is the about page."라는 텍스트를 표시하는 라우트를 작성하세요.

const exp = require("express");
const app = exp();
const port = 3000;

app.get("/", (require, respond)=>{
    respond.status(200).send("Welcome");
})

app.get("/about", (require, respond)=>{
    respond.status(200).send("This is the about page");
})

app.listen(port, ()=>{
    console.log(`Server running at ${port}`);
})