// 함수 가변성
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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.chirp = function () { };
    return Bird;
}(Animal));
var Crow = /** @class */ (function (_super) {
    __extends(Crow, _super);
    function Crow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crow.prototype.caw = function () { };
    return Crow;
}(Bird));
function chirp(bird) {
    bird.chirp();
    return bird;
}
chirp(new Animal); // 에러 TS2345: 인수 'Animal' 타입을
// 매개변수 'Bird' 타입에 할당할 수 없음
chirp(new Bird);
chirp(new Crow);
function clone(f) {
    var parent = new Bird;
    var babyBird = f(parent);
    babyBird.chirp();
}
function birdToBird(b) {
    return new Bird;
}
clone(birdToBird); // Ok
function birdToCrow(b) {
    return new Crow;
}
clone(birdToCrow); // Ok
function birdToAnimal(b) {
    return new Animal;
}
clone(birdToAnimal); // 에러 TS2345: 인수 '(d: Bird) => Animal' 타입은
// 매개변수 '(b: Bird) => Bird' 타입에 할당할 수 없음
// 'Animal' 타입은 'Bird' 타입에 할당할 수 없음
function animalToBird(a) {
    return new Bird;
}
clone(animalToBird); // Ok
function crowToBird(c) {
    c.caw();
    return new Bird;
}
clone(crowToBird); // 에러 TS2345: 인수 '(c: Crow) => Bird'의 타입은
// 매개변수 '(b: Bird) => Bird' 타입에 할당할 수 없음
