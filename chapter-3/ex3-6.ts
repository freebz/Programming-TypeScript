// 3.2.4 number

let a = 1234             // number
var b = Infinity * 0.10  // number
const c = 5678		 // 5678
let d = a < b		 // boolean
let e: number = 100	 // number
let f: 26.218 = 26.218	 // 26.218
let g: 26.218 = 10	 // 에러 TS2322: '10' 타입을
                         // '26.218' 타입에 할당할 수 없음



let oneMillion = 1_000_000  // 1000000과 같음
let twoMillion: 2_000_000 = 2_000_000
