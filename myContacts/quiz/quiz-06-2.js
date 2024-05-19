// ‘/users’ 경로로 요청할 때 사용자의 이름을 받아서
// ‘Hello, Kyunghee!’ 처럼 인사말을 반환하는 API를 작성해 보세요.

const exp = require("express");
const app = exp();
const port = 3000;

app.get("/users/:name", (require, respond)=>{
    const name = require.params.name;
    respond.status(200).send(`Hello, ${name}!`);
})

app.listen(port, ()=>{
    console.log(`Server running at ${port}`);
})