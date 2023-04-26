// 6.3.2 Record 타입

type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

let nextDay: Record<Weekday, Day> = {
    Mon: 'Tue'
}


// 에러 TS2739: '{Mon: "Tue"}' 타입에는
// 'Record<Weekday, Day>' 타입 중 Tue, Wed, Thu, Fri가 빠져 있음
