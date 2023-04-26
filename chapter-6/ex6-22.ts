// 6.3.3 매핑된 타입

type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

let nextDay: { [K in Weekday]: Day } = {
    Mon: 'Tue'
}


// 에러 TS2739: '{Mon: "Tue"}' 타입은 '{Mon: Weekday; Tue: Weekday;
// Wed: Weekday; Thu: Weekday; Fri: Weekday}'타입이 정의한 프로퍼티 중
// Tue, Wed, Thu, Fri를 포함하지 않음



type MyMappedType = {
    [Key in UnionType]: ValueType
}


type Record<K extends keyof any, T> = {
    [P in K]: T
}
