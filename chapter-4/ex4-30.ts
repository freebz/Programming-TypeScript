// 4.2.3 제네릭 타입 추론

function map<T, U>(array: T[], f: (item: T) => U): U[] {
    // ...
}
map(
    ['a', 'b', 'c'],  // T 타입의 배열
    _ => _ === 'a'    // U 타입을 반환하는 함수
)

map<string, boolean>(
    ['a', 'b', 'c'],
    _ => _ === 'a'
)

map<string>(  // 에러 TS2558: 두 개의 타입 인수가 필요한데 한 개만 전달됨
    ['a', 'b', 'c'],
    _ => _ === 'a'
)


// boolean은 boolean | string에 할당할 수 있으므로 OK
map<string, boolean | string>(
    ['a', 'b', 'c'],
    _ => _ === 'a'
)

map<string, number>(
    ['a', 'b', 'c'],
    _ => _ === 'a'  // 에러 TS2322: 'boolean' 타입은
                    // 'number' 타입에 할당할 수 없음
)


let promise = new Promise(resolve =>
    resolve(45)
)
promise.then(result =>  // {}로 추론함
    result * 4          // 에러 TS2362: 수학 연산의 왼쪽 연산자는 'any',
	                // 'number', 'bigint', enum 타입 중 하나여야 함
)


let promise = new Promise<number>(resolve =>
    resolve(45)
)
promise.then(result =>  // number
    result *4
)
