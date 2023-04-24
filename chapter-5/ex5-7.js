// 5.3 this를 반환 타입으로 사용하기
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
var set = new Set;
set.add(1).add(2).add(3);
set.has(2); // true
set.has(4); // false
var Set = /** @class */ (function () {
    function Set() {
    }
    Set.prototype.has = function (value) {
        // ...
    };
    Set.prototype.add = function (value) {
        // ...
    };
    return Set;
}());
var MutableSet = /** @class */ (function (_super) {
    __extends(MutableSet, _super);
    function MutableSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MutableSet.prototype.delete = function (value) {
        // ...
    };
    MutableSet.prototype.add = function (value) {
        // ...
    };
    return MutableSet;
}(Set));
