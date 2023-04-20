// 한정된 다형성으로 인수의 개수 정의하기

function call(
    f: (...args: unknown[]) => unknown,
    ...args: unknown[]
): unknown {
    return f(...args)
}

function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value)
}

call(fill, 10, 'a')  // 'a' 10개를 갖는 배열로 평가


function call<T extends unknown[], R>(
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args)
}


let a = call(fill, 10, 'a')       // striing[]
let b = call(fill, 10)	          // 에러 TS2554: 3개의 인수가 필요하지만
                                  // 2개가 전달됨
let c = call(fill, 10, 'a', 'z')  // 에러 TS2554: 3개의 인수가 필요하지만
                                  // 4개가 전달됨
