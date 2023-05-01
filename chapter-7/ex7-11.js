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
flatten(ask()
    .map(parse))
    .map(function (date) { return date.toISOString(); })
    .forEach(function (date) { return console.info('Date is', date); });
// 배열의 배열을 배열로 평탄화
function flatten(array) {
    return Array.prototype.concat.apply([], array);
}
