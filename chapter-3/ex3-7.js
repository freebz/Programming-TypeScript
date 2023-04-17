// 3.2.5 bigint
var a = 1234n; // bigint
var b = 5678n; // 5678n
var c = a + b; // bigint
var d = a < 1235; // boolean
var e = 88.5n; // 에러 TS1353: bigint 리터럴은 반드시 정수여야 함
var f = 100n; // bigint
var g = 100n; // 100n
var h = 100; // 에러 TS2322: '100' 타입은 'bigint' 타입에 할당할 수 없음
