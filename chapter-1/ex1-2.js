3 + []    // 에러: 정말 숫자와 배열을 더하는가?

let obj = {}
obj.foo   // 에러: obj에 "foo" 프로퍼티를 정의하지 않았음

function a(b) {
  return b/2
}
a("z")    // 에러: "a"는 숫자를 인수로 받는 함수인데 문자열을 전달함
