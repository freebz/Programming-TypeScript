// 이름을 붙인 함수
function greet(name: string) {
    return 'hello ' + name
}

// 함수 표현식
let greet2 = function (name: string) {
    return 'hello ' + name
}

// 화살표 함수 표현식
let greet3 = (name: string) => {
    return 'hello ' + name
}

// 단축형 화살표 함수 표현식
let greet4 = (name: string) =>
    'hello ' + name

// 함수 생성자
let greet5 = new Function('name', 'return "hello " + name')
