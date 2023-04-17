let user: {
    readonly firstName: string
} = {
    firstName: 'abby'
}
user.firstName         // string
user.firstName =
    'abbey with an e'  // 에러 TS2540: 'firstName'은 읽기 전용 프로퍼티이므로
                       // 할당할 수 없음
