type Executor<T, E extends Error> = (
    resolve: (result: T) => void,
    reject: (error: E) => void
) => void

class Promise<T, E extends Error> {
    constructor(f: Executor<T, E>) { }
    then<U, F extends Error>(g: (result: T) => Promise<U, F>): Promise<U, F>
    catch<U, F extends Error>(g: (error: E) => Promise<U, F>): Promise<U, F>
}


import { readFile } from 'fs'
readFile(path, (error, result) => {
    // ...
})

function readFilePromise(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
	readFile(path, (error, result) => {
	    if (error) {
		reject(error)
	    } else {
		resolve(result)
	    }
	})
    })
}



let a: () => Promise<string, TypeError> = // ...
let b: (s: string) => Promise<number, never> = // ...
let c: () => Promise<boolean, RangeError> = // ...

a()
    .then(b)
    .catch(e => c())  // b는 에러가 아니므로 a가 에러일 때 호출됨
    .then(result => console.info('Done', result))
    .catch(e => console.error('Error', e))
