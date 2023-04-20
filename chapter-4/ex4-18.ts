// 4.1.8 문맥적 타입화

function times(
    f: (index: number) => void,
    n: number
) {
    for (let i = 0; i < n; i++) {
	f(i)
    }
}



times(n => console.log(n), 4)



function f(n) {  // 에러 TS7006: 매개변수 'n'의 타입은 암묵적으로 'any' 타입이 됨
    console.log(n)
}

times(f, 4)
