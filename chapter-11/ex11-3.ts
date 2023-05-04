// 11.1.2 앰비언트 타입 선언

type ToArray<T> = T extends unknown[] ? T : T[]


function toArray<T>(a: T): ToArray<T> {
    // ...
}


type UserID = string & {readonly brand: unique symbol}
