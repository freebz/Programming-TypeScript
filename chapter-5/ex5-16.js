var Cat = /** @class */ (function () {
    function Cat() {
        this.name = 'Whiskers';
    }
    Cat.prototype.eat = function (food) {
        console.info('Ate some', food, '. Mmm!');
    };
    Cat.prototype.sleep = function (hours) {
        console.info('Slept for', hours, 'hours');
    };
    Cat.prototype.meow = function () {
        console.info('Meow');
    };
    return Cat;
}());
