// 이름을 붙인 함수
function greet(name) {
    return 'hello ' + name;
}
// 함수 표현식
var greet2 = function (name) {
    return 'hello ' + name;
};
// 화살표 함수 표현식
var greet3 = function (name) {
    return 'hello ' + name;
};
// 단축형 화살표 함수 표현식
var greet4 = function (name) {
    return 'hello ' + name;
};
// 함수 생성자
var greet5 = new Function('name', 'return "hello " + name');
