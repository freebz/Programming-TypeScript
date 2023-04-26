// 6.8 프로토타입 안전하게 확장하기

// 타입스크립트에 zip이 무엇인지 설명
interface Array<T> {
    zip<U>(list: U[]): [T, U][]
}

// .zip 구현
Array.prototype.zip = function <T, U>(
    this: T[],
    list: U[]
): [T, U][] {
    return this.map((v, k) =>
	tuple(v, list[k])
    )
}



declare global {
    interface Array<T> {
	zip<U>(list: U[]): [T, U][]
    }
}



// {
//     * exclude *: [
// 	"./zip.ts"
//     ]
// }



import './zip'
[1, 2, 3]
    .map(n => n * 2)       // number[]
    .zip(['a', 'b', 'c'])  // [number, string][]



// [
//     [2, 'a'],
//     [4, 'b'],
//     [6, 'c']
// ]
