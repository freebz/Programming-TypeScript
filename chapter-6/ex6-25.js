// 6.4 고급 함수 타입들
// 6.4.1 튜플의 타입 추론 개선
var a = [1, true]; // (number | boolean)[]
function tuple() {
    var ts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ts[_i] = arguments[_i];
    }
    return ts;
}
var b = tuple(1, true); // [number, boolean]
