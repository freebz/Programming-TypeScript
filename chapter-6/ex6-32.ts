type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never

// Array.slice의 타입 얻기
type F = typeof Array['prototype']['slice']

type A = SecondArg<F>  // number | undefined
