// 4.2 다형성

function filter(array, f) {
    let result = []
    for (let i = 0; i < array.length; i++) {
	let item = array[i]
	if (f(item)) {
	    result.push(item)
	}
    }
    return result
}

filter([1, 2, 3, 4], _ => _ < 3)  // [1, 2]로 평가



type Filter = {
    (array: unknown, f: unknown): unknown[]
}

type Filter = {
    (array: number[], f: (item: number) => boolean): number[]
}

type Filter = {
    (array: number[], f: (item: number) => boolean): number[]
    (array: string[], f: (item: string) => boolean): string[]
}

type Filter = {
    (array: number[], f: (item: number) => boolean): number[]
    (array: string[], f: (item: string) => boolean): string[]
    (array: object[], f: (item: object) => boolean): object[]
}


let names = [
    { firstName: 'beth' },
    { firstName: 'caitlyn' },
    { firstName: 'xin' }
]

let result = filter(
    names,
    _ => _.firstName.startsWith('b')
)  // 에러 TS2339: 'firstName' 프로퍼티는 'object' 타입에 존재하지 않음

result[0].firstName  // 에러 TS2339: 'firstName' 프로퍼티는
                     // 'object' 타입에 존재하지 않음



type Filter = {
    <T>(array: T[], f:(item: T) => boolean): T[]
}
let filter: Filter = (array, f) => // ...

// (a) T는 number로 한정됨
filter([1, 2, 3], _ => _ > 2)

// (b) T는 string으로 한정됨
filter(['a', 'b'], _ => _ !== 'b')

// (c) T는 {firstName: string}으로 한정됨
let names = [
    { firstName: 'beth' },
    { firstName: 'caitlyn' },
    { firstName: 'xin' }
]
filter(names, _ => _.firstName.startsWith('b'))
    
