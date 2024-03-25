const student1 = {
    name : '조평훈',
    age : 20,
    getInfo : function() {
        return `${this.name}은(는) ${this.age}세 입니다.`;
    }
};  

function Student(name, age) {

    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}은(는) ${this.age}세 입니다.`;
    }

}

const student3 = new Student('조팽팽', 20);
const student4 = new Student('조평순', 23);

console.log(student3);
console.log(student4.getInfo());

