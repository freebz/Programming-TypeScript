function ask() {
    return prompt('When is your birthday?');
}
function parse(birthday) {
    var date = new Date(birthday);
    if (!isValid(date)) {
        return null;
    }
    return date;
}
// 입력한 날짜가 유효한지 검사
function isValid(date) {
    return Object.prototype.toString.call(date) === '[object Date]'
        && !Number.isNaN(date.getTime());
}
var date = parse(ask());
if (date) {
    console.info('Date is', date.toISOString());
}
else {
    console.error('Error parsing date for some reason');
}
