// 5.5 클래스는 구조 기반 타입을 지원한다

class Zebra {
    trot() {
	// ...
    }
}

class Poodle {
    trot() {
	// ...
    }
}

function ambleAround(animal: Zebra) {
    animal.trot()
}

let zebra = new Zebra
let poodle = new Poodle

ambleAround(zebra)   // OK
ambleAround(poodle)  // OK



class A {
    private x = 1
}
class B extends A { }
function f(a: A) { }

f(new A)  // OK
f(new B)  // OK

f({ x: 1 })  // 에러 TS2345: 인수 '{x: number}' 타입은 매개변수
             // 'A' 타입에 할당할 수 없음
             // 'A'의 'x' 프로퍼티는 private이지만
             // '{x: number}'는 private이 아님
