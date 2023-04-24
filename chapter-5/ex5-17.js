// 5.5 클래스는 구조 기반 타입을 지원한다
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Zebra = /** @class */ (function () {
    function Zebra() {
    }
    Zebra.prototype.trot = function () {
        // ...
    };
    return Zebra;
}());
var Poodle = /** @class */ (function () {
    function Poodle() {
    }
    Poodle.prototype.trot = function () {
        // ...
    };
    return Poodle;
}());
function ambleAround(animal) {
    animal.trot();
}
var zebra = new Zebra;
var poodle = new Poodle;
ambleAround(zebra); // OK
ambleAround(poodle); // OK
var A = /** @class */ (function () {
    function A() {
        this.x = 1;
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B;
}(A));
function f(a) { }
f(new A); // OK
f(new B); // OK
f({ x: 1 }); // 에러 TS2345: 인수 '{x: number}' 타입은 매개변수
// 'A' 타입에 할당할 수 없음
// 'A'의 'x' 프로퍼티는 private이지만
// '{x: number}'는 private이 아님
