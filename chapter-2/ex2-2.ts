// 2.2.1 타입스크립트 vs. 자바스크립트

3 + [1];                         // "31"로 평가
(3).toString() + [1].toString()  // "31"로 평가



3 + [1];                         // 에러 TS2365: '+' 연산자를 '3'과
                                 // 'number[]' 타입에 적용할 수 없음
(3).toString() + [1].toString()  // "31"로 평가
