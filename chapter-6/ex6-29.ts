type ToArray2<T> = T extends unknown ? T[] : T[]
type A = ToArray2<number>           // number[]
type B = ToArray2<number | string>  // number[] | string[]
