// 'count' | 'friends'
function get(o, k) {
    return o[k];
}
var activityLog = // ...
 let, lastEvent = get(activityLog, 'lastEvent'); // Date
var get = function (object) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var result = object;
    keys.forEach(function (k) { return result = result[k]; });
    return result;
};
get(activityLog, 'events', 0, 'type'); // 'Read' | 'Write'
get(activityLog, 'bad'); // 에러 TS2345: 인수 '"bad"' 타입은 매개변수
// '"lastEvent" | "events"' 타입에 할당할 수 없음
