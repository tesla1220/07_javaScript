/* 전역과 지역 스코프 */

var x = 'global x';
var y = 'global y';

function outer() {
    var z = "outer's local z";
    console.log(x);
    console.log(y);
    console.log(z);

    function inner() {
        var x = "inner's local x";
        console.log(x);     // inner's local x
        console.log(y);     // global y
        console.log(z);     // outer's local z 
    }
    inner();
}
outer();

console.log(x);

console.log(apply(
function(value) {
    return value ** 2;
}, 5));