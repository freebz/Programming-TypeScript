function buildArray() {
    var a = []; // any[]
    a.push(1); // number[]
    a.push('x'); // (string | number)[]
    return a;
}
var myArray = buildArray(); // (string | number)[]
myArray.push(true); // 에러 2345: 'true' 타입의 인수는
// 'string | number' 타입의 매개변수에 할당할 수 없음
