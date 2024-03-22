/* 매개변수와 전달인자(인수) */

// 함수 선언문
function hello(name) {

    // 매개변수는 함수 몸체 내부에서만 참조 가능
    console.log(name);

    return `${name}님 하이요~`;
}

// console.log(name);   => 오류남. 매개 변수는 함수 몸체 내부에서만 참조 가능

console.log(hello('조평훈'));

var result = hello('조평훈');
console.log(result);