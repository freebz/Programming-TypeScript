// 확실한 할당(definite assignment)

let i: number
let j = i * 3  // 에러 TS2454: 할당하기 전에 변수 'i'를 사용함


let i
let j = i * 3  // 에러 TS2532: 'undefined' 객체
