// 6.4 고급 함수 타입들

// 6.4.1 튜플의 타입 추론 개선

let a = [1, true]  // (number | boolean)[]



function tuple<
    T extends unknown[]
>(
    ...ts: T
): T {
    return ts
}

let b = tuple(1, true)  // [number, boolean]
