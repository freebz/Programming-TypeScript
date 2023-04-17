enum Color {
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = 0xc10050,   // 16진수 리터럴
    White = 255	       // 10진수 리터럴
}

let red = Color.Red    // Color
let pink = Color.Pink  // Color


let a = Color.Red    // Color
let b = Color.Green  // 에러 TS2339: 'Green' 프로퍼티는
                     // 'typeof Color' 타입에 존재하지 않음
let c = Color[255]   // string
let d = Color[6]     // string (!!!)
