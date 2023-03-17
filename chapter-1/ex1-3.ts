3 + []    // 에러 TS2365: '3' 타입과 'never[]' 타입에
          // 연산자 '+'를 적용할 수 없음 

let obj = {}
obj.foo   // 에러 TS2339: '{}' 타입에 'foo' 프로퍼티가 존재하지 않음

function a(b) {
  return b/2
}
a("z")    // 에러 TS2345: 'number' 타입의 매개변수에
          // '"z"'라는 인수 타입을 할당할 수 없음