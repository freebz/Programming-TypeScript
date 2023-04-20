// 4.2.2 제네릭을 어디에 선언할 수 있을까?

type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}
let filter: Filter = // ...

type Filter<T> = {
    (array: T[], f: (item: T) => boolean): T[]
}
let filter: Filter<number> = // ...

type Filter = <T>(array: T[], f: (item: T) => boolean) => T[]
let filter: Filter = // ...

type Filter<T> = (array: T[], f: (item: T) => boolean) => T[]
let filter: Filter<string> = // ...

function filter<T>(array: T[], f: (item: T) => boolean): T[] {
    // ...
}
