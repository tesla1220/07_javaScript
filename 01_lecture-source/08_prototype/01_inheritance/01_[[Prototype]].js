
const user = {
    activate : true,
    login : function() {
        console.log('로그인 되었습니다!!');
    }
};

const student = {
    passion : true
};

student.__proto__ = user;

console.log(student.activate);

student.login();

const ohgiraffersStudent = {
    class : 402,
    __proto__ : student
};

// ohgiraffersStudent.__proto__=student;

console.log(ohgiraffersStudent.activate);
console.log(ohgiraffersStudent.passion);