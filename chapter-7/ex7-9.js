// 7.4 Option 타입
function ask() {
    return prompt('When is your birthday?');
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
var date = parse(ask());
date
    .map(function (_) { return _.toISOString(); })
    .forEach(function (_) { return console.info('Date is', _); });
