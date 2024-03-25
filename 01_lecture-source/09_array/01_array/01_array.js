const arr = ['바나나', '복숭아', '키위'];
console.log(arr);

const arr2 = new Array();
console.log(arr2);

const arr3 = new Array(10);
console.log(arr3);

const arr4 = new Array(1, 2, 3, '안녕');
console.log(arr4);

console.log(Array.of(10));
console.log(Array.of(10, 11, 12));
console.log(Array.of('문자', 'hi'));

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log(typeof arr);