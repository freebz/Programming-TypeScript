// 6.4.2 사용자 정의 타입 안전 장치
function isString(a) {
    return typeof a === 'string';
}
isString('a'); // true로 평가
isString([7]); // false로 평가
function parseInput(input) {
    var formattedInput;
    if (isString(input)) {
        formattedInput = input.toUpperCase(); // 에러 TS2339: 'number' 타입에
        // 'toUpperCase' 프로퍼티가
        // 존재하지 않음
    }
}
function isString(a) {
    return typeof a === 'string';
}
Dialog = // ...
    function isLegacyDialog(dialog) {
        // ...
    };
