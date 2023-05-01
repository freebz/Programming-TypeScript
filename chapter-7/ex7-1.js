// 7.1 null 반환
function ask() {
    return prompt('When is your birthday?');
}
function parse(birthday) {
    return new Date(birthday);
}
var date = parse(ask());
console.info('Date is', date.toISOString());
