// 4.1.9 오버로드된 함수 타입

// 단축형 호출 시그니처
type Log = (message: string, userId?: string) => void

// 전체 호출 시그니처
type Log = {
    (message: string, userId?: string): void
}



type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
}

let reserve: Reserve = (from, to, destination) => {
    // ...
}
