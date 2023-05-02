type Executor = (
    resolve: Function,
    reject: Function
) => void

class Promise {
    constructor(f: Executor) { }
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
