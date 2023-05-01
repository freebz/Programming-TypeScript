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
    .map(parse)
    .map(function (date) { return date.toISOString(); })
    // 에러 TS2339: 속성 'toISOString'는 'Date[]' 타입에 존재하지 않음
    .forEach(function (_) { return console.info('Date is', _); });
