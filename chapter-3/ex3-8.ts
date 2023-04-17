// 3.2.6 string

let a = 'hello'          // string
var b = 'billy'		 // string
const c = '!'		 // '!'
let d = a + ' ' + b + c  // string
let e: string = 'zoom'	 // string
let f: 'john' = 'john'	 // 'john'
let g: 'john' = 'zoe'	 // 에러 TS2322: "zoe" 타입을
                         // "john" 타입에 할당할 수 없음
