// 6.5.3 내장 조건부 타입들

type A = number | string
type B = string
type C = Exclude<A, B>  // number


type A number | string
type B = string
type C = Extract<A, B>  // string


type A = {a?: number | null}
type B = NonNullable<A['a']>  // number


type F = (a: number) => string
type R = ReturnType<F>  // string


type A = {new(): B}
type B = {b: number}
type I = InstanceType<A>  // {b: number}
