// 4.2 다형성
function filter(array, f) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
}
filter([1, 2, 3, 4], function (_) { return _ < 3; }); // [1, 2]로 평가
var names = [
    { firstName: 'beth' },
    { firstName: 'caitlyn' },
    { firstName: 'xin' }
];
var result = filter(names, function (_) { return _.firstName.startsWith('b'); }); // 에러 TS2339: 'firstName' 프로퍼티는 'object' 타입에 존재하지 않음
result[0].firstName; // 에러 TS2339: 'firstName' 프로퍼티는
var filter = function (array, f) {
    // (a) T는 number로 한정됨
    return filter([1, 2, 3], function (_) { return _ > 2; });
};
// (b) T는 string으로 한정됨
filter(['a', 'b'], function (_) { return _ !== 'b'; });
// (c) T는 {firstName: string}으로 한정됨
var names = [
    { firstName: 'beth' },
    { firstName: 'caitlyn' },
    { firstName: 'xin' }
];
filter(names, function (_) { return _.firstName.startsWith('b'); });
