/* 매개변수와 전달인자(인수) */

// 함수 선언문
function hello(name) {

    // 매개변수는 함수 몸체 내부에서만 참조 가능
    console.log(name);

    // 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관이 된다.
    console.log(arguments);


    return `${name}님 하이요~`;
}

// console.log(name);   => 오류남. 매개 변수는 함수 몸체 내부에서만 참조 가능

var result = hello('조평훈');
console.log(result);

// 함수는 매개변수의 개수와 인수의 개수가 일치하는 지 체크하지 않는다.
// 인수(전달인자)가 부족해서 할당되지 않은 매개변수의 값은 undefined 다. 

result = hello();
console.log(result);


