// 3.2.12 null, undefined, void, never

// (a) number 또는 null을 반환하는 함수
function a(x: number) {
    if (x < 10) {
	return x
    }
    return null
}

// (b) undefined를 반환하는 함수
function b() {
    return undefined
}

// (c) void를 반환하는 함수
function c() {
    let a = 2 + 2;
    let b = a * a
}

// (d) never를 반환하는 함수
function d() {
    throw TypeError('I always error')
}

// (e) never를 반환하는 또 다른 함수
function e() {
    while (true) {
	doSomething()
    }
}
