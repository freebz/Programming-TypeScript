// 3.2.2 unknown
var a = 30; // unknown
var b = a === 123; // boolean
var c = a + 10; // 에러 TS2571: 객체의 타입이 'unknown'임
if (typeof a === 'number') {
    var d = a + 10; // number
}
