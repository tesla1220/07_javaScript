/* 
    생성자 함수 프로토 타입
    new 연산자를 사용해 만든 객체는
    생성자 함수의 프로토타입 정보를 사용해 [[Porototype]]을 설정한다.
*/

const user = {
    activate : true,
    login :function() {
        console.log('로그인 되었습니다!!!')
    }
};

function Student(name) {
    this.name = name;
}

Student.prototype = user;

const student = new Student('조평훈');
console.log(student.activate);