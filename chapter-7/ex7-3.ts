// 7.2 예외 던지기

function ask() {
    return prompt('When is your birthday?')
}

function parse(birthday: string): Date {
    let date =  new Date(birthday)
    if (!isValid(date)) {
	throw new RangeError('Enter a date in the form YYYY/MM/DD')
    }
    return date
}

// 입력한 날짜가 유효한지 검사
function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
	&& !Number.isNaN(date.getTime())
}

try {
    let date = parse(ask())
    console.info('Date is', date.toISOString())
} catch (e) {
    console.error(e.message);
}
