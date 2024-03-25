const arr = [];

console.log(arr.constructor === Array);

console.log(Object.getPrototypeOf(arr) === Array.prototype);



const foodList = ['물회', '삼겹살', '까르보불닭', '팔도비빔면', '짜파게티'];

console.log(`index('물회') : ${foodList.indexOf('물회')}`);
console.log(`index('냉면') : ${foodList.indexOf('냉면')}`);

console.log(`lastIndex('팔도비빔면) : ${foodList.lastIndexOf('팔도비빔면')}`);

console.log(`foodList.includes('물회') : ${foodList.includes('물회')}`);


const chickenList = ['양념치킨', '후라이드', '파닭'];

console.log(chickenList);

chickenList.unshift('간장치킨');
chickenList.unshift('마늘치킨');

console.log(chickenList);
console.log(`unshift 후 배열 : ${chickenList}`);

chickenList.shift();

console.log(`shift 후 배열 : ${chickenList}`);

const idol1 = ['아이브', '에스파'];
const idol2 = ['블랙핑크', '여자아이들'];
const idol3 = ['트와이스', '방탄소년단'];

const mix = idol1.concat(idol2);
const mix2 = idol3.concat(idol1, idol2);

console.log(`idol1을 기준으로 결합 : ${mix}`);
console.log(`idol3번을 기준으로 결합 : ${mix2}`);