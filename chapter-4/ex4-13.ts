// 4.1.6 반복자

let numbers = {
    *[Symbol.iterator]() {
	for (let n = 1; n <= 10; n++) {
	    yield n
	}
    }
}



// for-of로 반복자 반복하기
for (let a of numbers) {
    // 1, 2, 3 등
}

// 반복자 스프레드
let allNumbers = [...numbers]  // number[]

// 반복자 구조 분해 할당(destructure)
let [one, two, ...rest] = numbers  // [number, number, number[]]
