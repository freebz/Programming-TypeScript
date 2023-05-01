function ask() {
    let result = prompt('When is your birthday?')
    if (result === null) {
	return []
    }
    return [result]
}

function parse(birthday: string): Date[] {
    let date =  new Date(birthday)
    if (!isValid(date)) {
	return []
    }
    return [date]
}

// 입력한 날짜가 유효한지 검사
function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
	&& !Number.isNaN(date.getTime())
}

flatten(ask()
    .map(parse))
    .map(date => date.toISOString())
    .forEach(date => console.info('Date is', date))

// 배열의 배열을 배열로 평탄화
function flatten<T>(array: T[][]): T[] {
    return Array.prototype.concat.apply([], array)
}
