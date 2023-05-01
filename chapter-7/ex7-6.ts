// 7.3 예외 반환

function ask() {
    return prompt('When is your birthday?')
}

// 커스텀 에러 타입
class InvalidDateFormatError extends RangeError { }
class DateIsInTheFutureError extends RangeError { }

function parse(
    birthday: string
): Date | InvalidDateFormatError | DateIsInTheFutureError {
    let date =  new Date(birthday)
    if (!isValid(date)) {
	return new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD')
    }
    if (date.getTime() > Date.now()) {
	return new DateIsInTheFutureError('Are you a timelord?')
    }
    return date
}

// 입력한 날짜가 유효한지 검사
function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
	&& !Number.isNaN(date.getTime())
}

let result = parse(ask())
if (result instanceof InvalidDateFormatError) {
    console.error(result.message)
} else if (result instanceof DateIsInTheFutureError) {
    console.info(result.message)
} else {
    console.info('Date is', result.toISOString())
}
