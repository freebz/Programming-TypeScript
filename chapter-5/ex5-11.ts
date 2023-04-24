// 5.4.1 선언 합침

// User는 name이라는 한 개의 필드를 가짐
interface User {
    name: string
}

// 이제 User는 name, age 두 개의 필드를 가짐
interface User {
    age: number
}

let a: User = {
    name: 'Ashley',
    age: 30
}
