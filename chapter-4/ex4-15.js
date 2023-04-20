// 타입 수준 코드와 값 수준 코드
function area(radius) {
    if (radius < 0) {
        return null;
    }
    return Math.PI * (Math.pow(radius, 2));
}
var r = 3;
var a = area(r);
if (a !== null) {
    console.info('result:', a);
}
