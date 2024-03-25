console.log([].length);

const arr = [1,2,3,4,5];
console.log(arr.length);

arr.push(6);

console.log(arr);
console.log(arr.length);

arr.pop();
console.log(arr);

arr.length = 3;
console.log(arr);

arr.length = 10;
console.log(arr.length);
console.log(Object.getOwnPropertyDescriptors(arr));

const arr2 = [ , 2, , 4];
console.log(arr2);
console.log(arr2.length);
