// 5.6 클래스는 값과 타입을 모두 선언한다
// 값
var a = 1999;
function b() { }
// ...
if (a + 1 > 3) //... // 문맥상 타입스크립트는 값 a로 추론함
    var x = 3; // 문맥상 타입스크립트는 타입 a로 추론함
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
var c = new C;
var E;
(function (E) {
    E[E["F"] = 0] = "F";
    E[E["G"] = 1] = "G";
})(E || (E = {}));
var e = E.F;
