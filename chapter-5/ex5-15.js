// 5.4.2 구현
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.eat = function (food) {
        console.info('Ate some', food, '. Mmm!');
    };
    Cat.prototype.sleep = function (hours) {
        console.info('Slept for', hours, 'hours');
    };
    return Cat;
}());
