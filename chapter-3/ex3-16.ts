let a: {
    b: number
    c?: string
    [key: number]: boolean
}


a = {b: 1}
a = {b: 1, c: undefined}
a = {b: 1, c: 'd'}
a = {b: 1, 10: true}
a = {b: 1, 10: true, 20: false}
a = {10: true}         // 에러 TS2741: '{10: true}' 타입에는 'b' 프로퍼티가 없음
a = {b: 1, 33: 'red'}  // 에러 TS2741: 'string' 타입은
                       // 'boolean' 타입에 할당할 수 없음
