/* Symbol 타입
    심볼은 ES6에서 추가된 7번째 타입으로 ,변경 불가능한 원시 타입의 값이다.
    다른 값과 중복되지 않는 유일무이한 값으로 이름 충돌할 위험이 없는 객체의
    유일한 프로퍼티 키를 만들기 위해 사용한다.
    심벌 이외의 원시 값은 리터럴을 통해 생성하지만 심볼은 Symbol 함수를 통해 생성한다. 
*/

var key = Symbol('key');
console.log(typeof key);

//  객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일한 값인 심볼을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]);

/* 자바스크립트의 데이터 타입은 크게 원시 타입과 객체 타입으로 분류한다. 
    number, string, boolean, undefined, null, symbol 
    이 6가지 타입을 제외한 나머지 값은 모두 객체 타입
*/