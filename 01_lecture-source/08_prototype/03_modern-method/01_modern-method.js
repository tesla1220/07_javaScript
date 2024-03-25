
const user = {
    activate : true
};

const student = Object.create(user);
console.log(student.activate);

console.log(Object.getPrototypeOf(student) === user );

Object.setPrototypeOf(student,{});
console.log(Object.getPrototypeOf(student) === user);