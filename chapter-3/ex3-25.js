// 3.2.10 배열
var a = [1, 2, 3]; // number[]
var b = ['a', 'b']; // string[]
var c; // string[]
var d = [1, 'a']; // (string | number)[]
var e = [2, 'b']; // (string | number)[]
var f = ['red'];
f.push('blue');
f.push(true); // 에러 TS2345: 'true' 타입 인수를
// 'string' 타입 매개변수에 할당할 수 없음
var g = []; // any[]
g.push(1); // number[]
g.push('red'); // (string | number)[]
var h = []; // number[]
h.push(1); // number[]
h.push('red'); // 에러 TS2345: 'red' 타입 인수를
// 'number' 타입 매개변수에 할당할 수 없음
