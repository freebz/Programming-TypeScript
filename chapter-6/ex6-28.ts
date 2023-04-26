// 6.5.1 분배적 조건부

type ToArray<T> = T[]
type A = ToArray<number>           // number[]
type B = ToArray<number | string>  // (number | string)[]
