let msg = '안녕하세요';
// let msg = '안녕히가세요';

let i =0;
for(let i = 0; i < 10; i++) {
    console.log(`지역 변수 i : ${i}`);
}
console.log(`전역 변수 i : ${i}`);

// console.log(x);
let x;

let y =1;
if(true) {
    console.log(y);
    let y = 2;
}