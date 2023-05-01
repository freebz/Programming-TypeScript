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
    flatMap<U>(f: (value: T) => None): None
    flatMap<U>(f: (value: T) => Option<U>): Option<U>
    getOrElse(value: T): T
}
class Some<T> implements Option<T> {
    constructor(private value: T) { }
    flatMap<U>(f: (value: T) => None): None
    flatMap<U>(f: (value: T) => Some<U>): Some<U>
    flatMap<U>(f: (value: T) => Option<U>): Option<U> {
	return f(this.value)
    }
    getOrElse(): T {
	return this.value
    }
}
class None implements Option<never> {
    flatMap(): None {
	return this
    }
    getOrElse<U>(value: U): U {
	return value
    }
}



function Option<T>(value: null | undefined): None
function Option<T>(value: T): Some<T>
function Option<T>(value: T): Option<T> {
    if (value == null) {
	return new None
    }
    return new Some(value)
}


let result = Option(6)            // Some<number>
    .flatMap(n => Option(n * 3))  // Some<number>
    .flatMap(n => new None)	  // None
    .getOrElse(7)		  // 7



ask()                                                 // Option<string>
    .flatMap(parse)                                   // Option<Date>
    .flatMap(date => new Some(date.toISOString()))    // Option<string>
    .flatMap(date => new Some('Date is ' + date))     // Option<string>
    .getOrElse('Error parsing date for some reason')  // string
