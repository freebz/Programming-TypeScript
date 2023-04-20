// 한정된 다형성으로 인수의 개수 정의하기
function call(f) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return f.apply(void 0, args);
}
function fill(length, value) {
    return Array.from({ length: length }, function () { return value; });
}
call(fill, 10, 'a'); // 'a' 10개를 갖는 배열로 평가
function call(f) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return f.apply(void 0, args);
}
var a = call(fill, 10, 'a'); // striing[]
var b = call(fill, 10); // 에러 TS2554: 3개의 인수가 필요하지만
// 2개가 전달됨
var c = call(fill, 10, 'a', 'z'); // 에러 TS2554: 3개의 인수가 필요하지만
// 4개가 전달됨
