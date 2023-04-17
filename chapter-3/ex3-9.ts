// 3.2.7 symbol

let a = Symbol('a')          // symbol
let b: symbol = Symbol('b')  // symbol
var c = a === b      // boolean
let d = a + 'x'	     // 에러 TS2469: '+' 연산을 'symbol' 타입에 적용할 수 없음


const e = Symbol('e')                 // typeof e
const f: unique symbol = Symbol('f')  // typeof f
let g: unique symbol = Symbol('f')    // 에러 TS1332: 'unique symbol' 타입은
                                      // 반드시 'const'여야 함
let h = e === e  // boolean
let i = e === f	 // 에러 TS2367: 'unique symbol' 타입은
                 // 서로 겹치는 일이 없으므로 이 비교문의 결과는 항상 'false'
