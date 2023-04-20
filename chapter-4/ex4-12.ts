// 4.1.5 제너레이터 함수

function* createFibonacciGenerator() {
    let a = 0
    let b = 1
    while (true) {
	yield a;
	[a, b] = [b, a + b]
    }
}

let fibonacciGenerator = createFibonacciGenerator()
                           // IterableIterator<number>
fibonacciGenerator.next()  // {value: 0, done: false}로 평가
fibonacciGenerator.next()  // {value: 1, done: false}로 평가
fibonacciGenerator.next()  // {value: 1, done: false}로 평가
fibonacciGenerator.next()  // {value: 2, done: false}로 평가
fibonacciGenerator.next()  // {value: 3, done: false}로 평가
fibonacciGenerator.next()  // {value: 5, done: false}로 평가



function* createNumbers(): IterableIterator<number> {
    let n = 0
    while (1) {
	yield n++
    }
}

let numbers = createNumbers()
numbers.next()  // {value: 0, done: false}로 평가
numbers.next()  // {value: 1, done: false}로 평가
numbers.next()  // {value: 2, done: false}로 평가
