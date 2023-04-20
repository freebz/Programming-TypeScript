// 4.2.3 제네릭 타입 추론
function map(array, f) {
    // ...
}
map(['a', 'b', 'c'], // T 타입의 배열
function (// T 타입의 배열
_) { return _ === 'a'; } // U 타입을 반환하는 함수
);
map(['a', 'b', 'c'], function (_) { return _ === 'a'; });
map(// 에러 TS2558: 두 개의 타입 인수가 필요한데 한 개만 전달됨
['a', 'b', 'c'], function (_) { return _ === 'a'; });
// boolean은 boolean | string에 할당할 수 있으므로 OK
map(['a', 'b', 'c'], function (_) { return _ === 'a'; });
map(['a', 'b', 'c'], function (_) { return _ === 'a'; } // 에러 TS2322: 'boolean' 타입은
// 'number' 타입에 할당할 수 없음
);
var promise = new Promise(function (resolve) {
    return resolve(45);
});
promise.then(function (result) {
    return result * 4;
} // 에러 TS2362: 수학 연산의 왼쪽 연산자는 'any',
// 'number', 'bigint', enum 타입 중 하나여야 함
);
var promise = new Promise(function (resolve) {
    return resolve(45);
});
promise.then(function (result) {
    return result * 4;
});
