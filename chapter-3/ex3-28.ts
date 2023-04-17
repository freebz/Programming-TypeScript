// 3.2.11 튜플

let a: [number] = [1]

// [이름, 성씨, 생년] 튜플
let b: [string, string, number] = ['malcolm', 'gladwell', 1963]

b = ['queen', 'elizabeth', 'ii', 1926]  // 에러 TS2322: 'string'은
                                        // 'number' 타입에 할당할 수 없음


// 방향에 따라 다른 값을 갖는 기차 요금 배열
let trainFares: [number, number?][] = [
    [3.75],
    [8.25, 7.70],
    [10.50]
]
// 다음과 같음
let moreTrainFares: ([number] | [number, number])[] = [
    // ...
]


// 최소 한 개의 요소를 갖는 string 배열
let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire']
// 이형 배열
let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']
