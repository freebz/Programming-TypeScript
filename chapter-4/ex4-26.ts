// 4.2.1 언제 제네릭 타입이 한정되는가?

type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}

let filter: Filter = (array, f) =>
    // ...


type Filter<T> = {
    (array: T[], f: (item: T) => boolean): T[]
}
let filter: Filter = (array, f) =>  // 에러 TS2314: 제네릭 타입 'Filter'는
                                    // 한 개의 타입 인수를 요구함
    // ...
type OtherFilter = Filter  // 에러 TS2314: 제네릭 타입 'Filter'는
                           // 한 개의 타입 인수를 요구함

let filter: Filter<number> = (array, f) =>
    // ...

type StringFilter = Filter<string>
let stringFilter: StringFilter = (array, f) =>
    // ...
