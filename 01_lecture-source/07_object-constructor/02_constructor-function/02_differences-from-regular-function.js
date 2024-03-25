
function Student(name, age) {

    console.log(this);
    
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}은(는) ${this.age}세 입니다.`;
    }
}

const student = Student('조평훈', 20);

console.log(student);
console.log(globalThis);
console.log(age);

const student2 = new Student('회원', 20);
console.log(student2);


function Dog(name, age) {

    if(!new.target){
        return new Dog(name, age);
    }
    this.name = name;
    this.age = age;
}

const dog = Dog('뽀삐', 3);
console.log(dog);