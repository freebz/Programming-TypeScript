// 유효한 enum 키 접근
var a = 0 /* Language.English */; // Language
// 유효하지 않은 enum 키 접근
var b = Language.Tagalog; // 에러 TS2339: 'Tagalog' 프로퍼티는
// 'typeof Language' 타입에 존재하지 않음
// 유효한 enum 키 접근
var c = Language[0]; // 에러 TS2476: const enum 멤버는
// 문자열 리터럴로만 접근할 수 있음
// 유효하지 않은 enum 키 접근
var d = Language[6]; // 에러 TS2476: const enum 멤버는
// 문자열 리터럴로만 접근할 수 있음
