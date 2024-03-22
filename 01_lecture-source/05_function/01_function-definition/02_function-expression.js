/* 함수 표현식 */

/* 
    자바 스크립트의 함수 : 객체 타입의 값 
    일급 객체 : 값의 성질을 갖는 객체
    함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.

*/ 


// 함수 표현식에서는 함수명을 생략할 수 있다. 
var hello = function(name) {
    return `${name}님 하이요~`;
}

// 그러면 어떻게 호출할까? -> 변수명이 식별자가 된다. 
console.log(hello('조평훈'));


// 함수 표현식에서 함수명을 생략하지 않아도 된다. 
var calc = function add(a,b) {
    return a + b;
}

// 단, 함수 호출은 식별자로 한다. -> calc 
console.log(calc(10,20));

console.log(calc(10,'20'));