// 읽기 전용 배열과 튜플
var as = [1, 2, 3]; // readonly number[]
var bs = as.concat(4); // readonly number[]
var three = bs[2]; // number
as[4] = 5; // 에러 TS2542: 'readonly number[]'의 인덱스 시그니처 타입은
// 읽기만 허용함
as.push(6); // 에러 TS2339: 'push' 프로퍼티는
