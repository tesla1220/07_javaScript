/* 암묵적 타입 변환 
    개발자가 의도적으로 타입을 변환하는 것을 명시적 타입 변환이라고 한다.
    자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되는 것을 암묵적 타입 변환이라고 한다. 
    코드에서 드러나지 않기 때문에 타입 변환된 결과를 예측해야 오류를 방지할 수 있다.
*/

console.log("===============문자열 타입으로 변환==============")


// 문자열 연결 연산자 + 
console.log(10 + '20');

// 템플릿 리터럴 표현식 삽입은 표현식의 결과를 문자열 타입으로 암묵적 변환
console.log(`10 + 20 : ${10 + 20}`);

// 문자열 타입이 아닌 값을 문자열 타입으로 암묵적으로 변환하는 결과 
console.log(NaN + '');
console.log({} + '');
console.log([] + '');   // 공백
console.log(function(){} + '');
