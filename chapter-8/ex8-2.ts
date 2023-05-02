// 8.2 콜백 사용하기

function readFile(
    path: string,
    options: { encoding: string, flag?: string },
    callback: (err: Error | null, data: string | null) => void
): void



import * as fs from 'fs'

// 아파치 서버의 접근 로그에서 데이터 읽기
fs.readFile(
    '/var/log/apache2/access_log',
    { encoding: 'utf8' },
    (error, data) => {
	if (error) {
	    console.error('error reading!', error)
	    return
	}
	console.info('success reading!', data)
    }
)

// 동시에 같은 접근 로그에 기록하기
fs.appendFile(
    '/var/log/apache2/access_log',
    'New access log entry',
    error => {
	if (error) {
	    console.error('error writing!', error)
	}
    })



async1((err1, res1) => {
    if (res1) {
	async2(res1, (err2, res2) => {
	    if (res2) {
		async3(res2, (err3, res3) => {
		    // ...
		})
	    }
	})
    }
})
