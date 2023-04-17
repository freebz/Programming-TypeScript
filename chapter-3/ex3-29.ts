// 읽기 전용 배열과 튜플

let as: readonly number[] = [1, 2, 3]     // readonly number[]
let bs: readonly number[] = as.concat(4)  // readonly number[]
let three = bs[2]			  // number
as[4] = 5   // 에러 TS2542: 'readonly number[]'의 인덱스 시그니처 타입은
            // 읽기만 허용함

as.push(6)  // 에러 TS2339: 'push' 프로퍼티는
            // 'readonly number[]' 타입에 존재하지 않음


type A = readonly string[]      // readonly string[]
type B = ReadonlyArray<string>  // readonly string[]
type C = Readonly<string[]>	// readonly string[]

type D = readonly [number, string]   // readonly [number, string]
type E = Readonly<[number, string]>  // readonly [number, string]
