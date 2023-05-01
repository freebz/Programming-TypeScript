function ask() {
    var result = prompt('When is your birthday?');
    if (result === null) {
        return [];
    }
    return [result];
}
function parse(birthday) {
    var date = new Date(birthday);
    if (!isValid(date)) {
        return [];
    }
    return [date];
}
// 입력한 날짜가 유효한지 검사
function isValid(date) {
    return Object.prototype.toString.call(date) === '[object Date]'
        && !Number.isNaN(date.getTime());
}
ask()
    .flatMap(parse)
    .flatMap(function (date) { return new Some(date.toISOString()); })
    .flatMap(function (date) { return new Some('Date is' + date); })
    .getOrElse('Error parsing date for some reason');
var Some = /** @class */ (function () {
    function Some(value) {
        this.value = value;
    }
    Some.prototype.flatMap = function (f) {
        return f(this.value);
    };
    Some.prototype.getOrElse = function () {
        return this.value;
    };
    return Some;
}());
var None = /** @class */ (function () {
    function None() {
    }
    None.prototype.flatMap = function () {
        return this;
    };
    None.prototype.getOrElse = function (value) {
        return value;
    };
    return None;
}());
function Option(value) {
    if (value == null) {
        return new None;
    }
    return new Some(value);
}
var result = Option(6) // Some<number>
    .flatMap(function (n) { return Option(n * 3); }) // Some<number>
    .flatMap(function (n) { return new None; }) // None
    .getOrElse(7); // 7
ask() // Option<string>
    .flatMap(parse) // Option<Date>
    .flatMap(function (date) { return new Some(date.toISOString()); }) // Option<string>
    .flatMap(function (date) { return new Some('Date is ' + date); }) // Option<string>
    .getOrElse('Error parsing date for some reason'); // string
