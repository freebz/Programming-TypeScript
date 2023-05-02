// 8.3 프로미스로 정상 회복하기

function appendAndReadPromise(path: string, data: string): Promise<string> {
    return appendPromise(path, data)
	.then(() => readPromise(path))
	.catch(error => console.error(error))
}


function appendAndRead(
    path: string,
    data: string,
    cb: (error: Error | null, result: string | null) => void
) {
    appendFile(path, data, error => {
	if (error) {
	    return cb(error, null)
	}
	readFile(path, (error, result) => {
	    if (error) {
		return cb(error, null)
	    }
	    cb(null, result)
	})
    })
}
