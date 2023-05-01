function ask() {
    return prompt('When is your birthday?')
}

// 커스텀 에러 타입
class InvalidDateFormatError extends RangeError { }
class DateIsInTheFutureError extends RangeError { }

/**
 * @throws {InvalidDateFormatError} 사용자가 생일을 잘못 입력함
 * @throws {DateIsInTheFutureError} 사용자가 생일을 미래 날짜로 입력함
 */

function parse(birthday: string): Date {
    let date =  new Date(birthday)
    if (!isValid(date)) {
	throw new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD')
    }
    if (date.getTime() > Date.now()) {
	throw new DateIsInTheFutureError('Are you a timelord?')
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
    if (e instanceof InvalidDateFormatError) {
	console.error(e.message)
    } else if (e instanceof DateIsInTheFutureError) {
	console.info(e.message)
    } else {
	throw e
    }
}
