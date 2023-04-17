// 3.2.2 unknown

let a: unknown = 30  // unknown
let b = a === 123    // boolean
let c = a + 10	     // 에러 TS2571: 객체의 타입이 'unknown'임
if (typeof a === 'number') {
    let d = a + 10   // number
}
