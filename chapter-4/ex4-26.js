// 4.2.1 언제 제네릭 타입이 한정되는가?
var filter = function (array, f) {
    // ...
    return type;
}, Filter;
;
{
    (function (array, f) {
        return ;
    });
}
var filter = function (array, f) {
    // 한 개의 타입 인수를 요구함
    // ...
    return type;
}, OtherFilter = Filter; // 에러 TS2314: 제네릭 타입 'Filter'는
// 한 개의 타입 인수를 요구함
var filter = function (array, f) {
    // ...
    return type;
}, StringFilter = (Filter);
var stringFilter = function (array, f) {
    return ;
};
// ...
