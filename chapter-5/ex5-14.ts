interface User<Age extends number> {  // 에러 TS2428: 'User'의 모든 선언은
                                      // 같은 타입 매개변수를 가져야 함
    age: Age
}

interface User<Age extends string> {
    age: Age
}
