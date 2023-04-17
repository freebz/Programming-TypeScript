// 3.2.9 휴식 시간: 타입 별칭, 유니온, 인터섹션

// 타입 별칭

type Age = number
type Person = {
    name: string
    age: Age
}

let age: Age = 55
let driver: Person = {
    name: 'James May',
    age: age
}
