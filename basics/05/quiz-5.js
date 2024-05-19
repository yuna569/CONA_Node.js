// 다음과 같이 arr 배열이 주어졌을 때 1초 간격으로 arr 배열의 요소를 출력하는 Node.js 비동기 함수를 작성하세요.
const arr = [10, 20, 30, 40, 50];

for (let i=0; i<5; i++) {
    setTimeout(()=>{
        console.log(arr[i]);
    }, i*1000);
}ㅂ