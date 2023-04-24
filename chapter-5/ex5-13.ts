interface User {
    age: string
}

interface User {
    age: number  // 에러 TS2717: 다른 프로퍼티 선언도 같은 타입을 가져야 함
}  // 프로퍼티 'age'는 반드시 'string' 타입이어야 하는데 'number' 타입으로 선언됨
