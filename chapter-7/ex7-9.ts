// 7.4 Option 타입

function ask() {
    return prompt('When is your birthday?')
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

let date = parse(ask())
date
    .map(_ => _.toISOString())
    .forEach(_ => console.info('Date is', _))
