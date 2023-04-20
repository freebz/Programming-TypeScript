// 타입 수준 코드와 값 수준 코드

function area(radius: number): number | null {
    if (radius < 0) {
	return null
    }
    return Math.PI * (radius ** 2)
}

let r: number = 3
let a = area(r)
if (a !== null) {
    console.info('result:', a)
}
