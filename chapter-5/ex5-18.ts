// 5.6 클래스는 값과 타입을 모두 선언한다

// 값
let a = 1999
function b() { }

// 타입
type a = number
interface b {
    (): void
}



// ...
if (a + 1 > 3)  //... // 문맥상 타입스크립트는 값 a로 추론함
let x: a = 3          // 문맥상 타입스크립트는 타입 a로 추론함



class C { }
let c: C
    =new C

enum E { F, G }
let e: E
    = E.F
