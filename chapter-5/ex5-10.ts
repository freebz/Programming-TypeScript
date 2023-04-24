interface A {
    good(x: number): string
    bad(x: number): string
}

interface B extends A {
    good(x: string | number): string
    bad(x: string): string  // 에러 TS2430: 인터페이스 'B'는
                            // 인터페이스 'A'를 올바르게 상속받지 않음
                            // 'number' 타입은
                            // 'string' 타입에 할당할 수 없음
}
