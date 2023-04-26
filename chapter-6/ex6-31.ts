// 6.5.2 infer 키워드

type ElementType<T> = T extends unknown[] ? T[number] : T
type A = ElementType<number[]>  // number


type ElementType2<T> = T extends (infer U)[] ? U : T
type B = ElementType2<number[]>  // number


type ElementUgly<T, U> = T extends U[] ? U : T
type C = ElementUgly<number[]>  // 에러 TS2314: 제네릭 타입 'ElementUgly'는
                                // 두 개의 타입 인수를 필요로 함
