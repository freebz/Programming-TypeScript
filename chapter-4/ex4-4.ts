function add(a: number, b: number) {
    return a + b
}

function greet(name: string) {
    return 'hello ' + name
}


add(1, 2)         // 3으로 평가
greet('Crystal')  // 'hello Crystal'로 평가


add(1)       // 에러 TS2554: 2개의 인수가 필요한데 1개만 전달됨
add(1, 'a')  // 에러 TS2345: 'a' 인수 타입은
             // 'number' 매개변수 타입에 할당할 수 없음
