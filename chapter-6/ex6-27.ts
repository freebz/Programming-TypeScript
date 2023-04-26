// 6.5 조건부 타입

type IsString<T> = T extends string
    ? true
    : false

type A = IsString<string>  // true
type b = IsString<number>  // false
