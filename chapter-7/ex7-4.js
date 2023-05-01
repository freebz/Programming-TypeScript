function ask() {
    return prompt('When is your birthday?');
}
function parse(birthday) {
    var date = new Date(birthday);
    if (!isValid(date)) {
        throw new RangeError('Enter a date in the form YYYY/MM/DD');
    }
    return date;
}
// 입력한 날짜가 유효한지 검사
function isValid(date) {
    return Object.prototype.toString.call(date) === '[object Date]'
        && !Number.isNaN(date.getTime());
}
try {
    var date = parse(ask());
    console.info('Date is', date.toISOString());
}
catch (e) {
    if (e instanceof RangeError) {
        console.error(e.message);
    }
    else {
        throw e;
    }
}
