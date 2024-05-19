// 사용하여 사용자가 입력한 숫자를 받아 해당 숫자의 제곱을 반환하는 API를 작성하세요.
// (예) "/square/5" 경로로 접속하면 25를 반환합니다.
const exp = require("express");
const app = exp();
const port = 3000;

app.get("/square/:number", (require, respond)=>{
    const num = require.params.number
    respond.status(200).send(`square of ${num} is ${num*num}`);
})

app.listen(port, ()=>{
    console.log(`Server running at ${port}`);
})