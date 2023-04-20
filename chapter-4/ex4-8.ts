// 4.1.2 나머지 매개변수

function sum(numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
}

sum([1, 2, 3])  // 6으로 평가



function sumVariadic(): number {
    return Array
	.from(arguments)
	.reduce((total, n) => total + n, 0)
}

sumVariadic(1, 2, 3)  // 에러 TS2554: 0개의 인수가 필요한데 3개의 인수가 제공됨



function sumVariadicSafe(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
}

sumVariadicSafe(1, 2, 3)  // 6으로 평가



interface Console {
    log(message?: any, ...optionalParams: any[]): void
}
