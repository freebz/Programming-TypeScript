type Color = 'red'

let x = Math.random() < .5

if (x) {
    type Color = 'blue'  // 위의 Color 정의를 덮어씀
    let b: Color = 'blue'
} else {
    let c: Color = 'red'
}
