// greet(name: string) 함수
type Greet = (name: string) => string

// log(message: string, userId?: string) 함수
type Log = (message: string, userId?: string) => void

// sumVariadicSafe(...numbers: number[]): number 함수
type SumVariadicSafe = (...numbers: number[]) => number
