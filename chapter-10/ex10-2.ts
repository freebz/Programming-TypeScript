// 10.2 import, export

// a.ts
export function foo() { }
export function bar() { }

// b.ts
import { foo, bar } from './a'
foo()
export let result = bar()


// c.ts
export default function meow(loudness: number) { }

// d.ts
import meow from './c'  // {중괄호}가 없다는 사실에 주의
meow(11)


// e.ts
import * as a from './a'
a.foo()
a.bar()


// f.ts
export * from './a'
import { result } from './b'
import meow from './c'


// g.ts
export let X = 3
export type X = { y: string }

// h.ts
import { X } from './g'

let a = X + 1          // X는 값 X를 가리킴
let b: X = { y: 'z' }  // X는 타입 X를 가리킴
