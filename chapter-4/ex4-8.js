// 4.1.2 나머지 매개변수
function sum(numbers) {
    return numbers.reduce(function (total, n) { return total + n; }, 0);
}
sum([1, 2, 3]); // 6으로 평가
function sumVariadic() {
    return Array
        .from(arguments)
        .reduce(function (total, n) { return total + n; }, 0);
}
sumVariadic(1, 2, 3); // 에러 TS2554: 0개의 인수가 필요한데 3개의 인수가 제공됨
function sumVariadicSafe() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, n) { return total + n; }, 0);
}
sumVariadicSafe(1, 2, 3); // 6으로 평가
