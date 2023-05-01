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

ask()
    .flatMap(parse)
    .flatMap(date => new Some(date.toISOString()))
    .flatMap(date => new Some('Date is' + date))
    .getOrElse('Error parsing date for some reason')


interface Option<T> {
    flatMap<U>(f: (value: T) => Option<U>): Option<U>
    getOrElse(value: T): T
}
class Some<T> implements Option<T> {
    constructor(private value: T) { }
    flatMap<U>(f: (value: T) => Option<U>): Option<U> {
	return f(this.value)
    }
    getOrElse(): T {
	return this.value
    }
}
class None implements Option<never> {
    flatMap<U>(): Option<U> {
	return this
    }
    getOrElse<U>(value: U): U {
	return value
    }
}
