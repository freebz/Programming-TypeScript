// 오버로드 시그니처는 구체적으로 유지하자
var reserve = function (from, toOrDestination, destination) {
    // ...
};
function getMonth(date) {
    if (date instanceof Date) {
        return date.getMonth();
    }
}
function getMonth(date) {
    return date.getMonth();
}
