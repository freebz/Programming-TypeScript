function x(): T | Error1 {
    // ...
}

function y(): U | Error1 | Error2 {
    let a = x()
    if (a instanceof Error) {
	return a
    }
    // a로 어떤 동작을 수행함
}

function z(): U | Error1 | Error2 | Error3 {
    let a = y()
    if (a instanceof Error) {
	return a
    }
    // a로 어떤 동작을 수행함
}
